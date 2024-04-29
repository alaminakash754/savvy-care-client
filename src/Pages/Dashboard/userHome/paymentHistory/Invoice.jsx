import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import "../payments/Invoice.css";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Swal from "sweetalert2";

const Invoice = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  const pdfRef = useRef();
  const handlePdf = useReactToPrint({
    content: () => pdfRef.current,
    documentTitle: "invoice",
    onAfterPrint: () =>
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Invoice is Ready to Print",
        showConfirmButton: false,
        timer: 1500,
      }),
  });

  // const downloadPDF = () => {
  //   const input = pdfRef.current;
  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF("p", "mm", "a4", true);
  //     const pdfWidth = pdf.internal.pageSize.getWidth();
  //     const pdfHeight = pdf.internal.pageSize.getHeight();
  //     const imgWidth = canvas.width;
  //     const imgHeight = canvas.height;
  //     const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
  //     const imgX = (pdfWidth - imgHeight * ratio) / 2;
  //     const imgY = 30;
  //     pdf.addImage(
  //       imgData,
  //       "PNG",
  //       imgX,
  //       imgY,
  //       imgWidth * ratio,
  //       imgHeight * ratio
  //     );
  //     pdf.save("invoice.pdf");
  //   });
  // };

  return (
    <div className="invoice-img bg-fixed text-white  mb-5 rounded-xl">
      {payments.map((payment, index) => (
        <div
          className="text-black   opacity-100 pt-10"
          ref={pdfRef}
          key={index}
        >
          <h1 className="text-center text-3xl font-bold">
            Welcome to <span className="text-blue-600"> Smile Savvy Care</span>
          </h1>
          <div className="ml-10  space-y-3">
            <h2 className="border-b-2  w-1/2 border-blue-400 border-dotted text-lg font-medium">
              Patients Name:{" "}
              <span className="text-lg font-bold">{user.displayName}</span>
            </h2>
            <h2 className="border-b-2  w-1/2 border-blue-400 border-dotted text-lg font-medium">
              Diseases Details: <span className="text-lg font-bold"></span>
              {payment?.patientProblem}{" "}
            </h2>
            <h3 className="border-b-2  w-1/2 border-blue-400 border-dotted text-lg font-medium">
              Refer Doctors: <span className="text-lg font-bold"></span>
              {payment?.doctorName}{" "}
            </h3>
            <h3 className="border-b-2  w-1/2 border-blue-400 border-dotted text-lg font-medium">
              Appointment Ids:{" "}
              <span className="text-lg font-bold">
                {payment?.appointmentIds}
              </span>
            </h3>
            <h4 className="border-b-2  w-1/2 border-blue-400 border-dotted text-lg font-medium">
              Appointment Date:{" "}
              <span className="text-lg font-bold">{payment?.date}</span>
            </h4>
            <h4 className="border-b-2  w-1/2 border-blue-400 border-dotted text-lg font-medium">
              Total Cost: ${" "}
              <span className="text-lg font-bold">{payment?.price}</span>
            </h4>
            <h5 className="border-b-2  w-1/2 border-blue-400 border-dotted text-lg font-medium">
              Payment Status: <span className="text-lg font-bold">Paid</span>
            </h5>
          </div>
        </div>
      ))}
      <div className="items-center justify-center text-center mt-5">
        <button onClick={handlePdf} className="btn btn-primary bg-blue-500">
          Download Invoice PDF
        </button>
      </div>
    </div>
  );
};

export default Invoice;
