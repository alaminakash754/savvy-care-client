import { useLoaderData } from "react-router-dom";
import PrescriptionCard from "./PrescriptionCard";

const DoctorSuggestion = () => {
  const prescriptions = useLoaderData();
  return (
    <div>
      {prescriptions.map((prescription) => (
        <PrescriptionCard
          key={prescription._id}
          prescription={prescription}
        ></PrescriptionCard>
      ))}
    </div>
  );
};

export default DoctorSuggestion;
