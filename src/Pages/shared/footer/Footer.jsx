import { Link } from "react-router-dom";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <footer className="rounded-xl mt-10">
      <div className="footer p-10 bg-blue-100 rounded-xl">
        <aside>
          <img
            className="w-36 h-16 rounded-2xl border-2 border-blue-200 p-2"
            src="https://i.ibb.co/ccWYw9W/logo.jpg"
            alt=""
          />
          <p>
            Smile Savvy Care Ltd.
            <br />
            Providing reliable dental clinic system since 1992
          </p>
          <p>House: 48, Road: 11/A, Dhanmondi, Dhaka-1209</p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to="/doctorsProfile">
            <p className="link link-hover">Doctor Portal</p>
          </Link>
          <Link to="/appointment">
            <p className="link link-hover">Patient Appointment</p>
          </Link>

          <Link to="/">
            <p className="link link-hover">Home</p>
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/suggestion">
            <p className="link link-hover">Doctors Suggestion</p>
          </Link>
          <Link to="/patientAndDoctor">
            {" "}
            <p className="link link-hover">Online Prescription</p>
          </Link>
        </nav>
      </div>
      <aside className="footer p-4 bg-base-300 footer-center rounded-xl">
        <p className="inline-block">
          Copyright <span>&#169;</span> {year} - All right reserved by SMILE
          SAVVY CARE Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
