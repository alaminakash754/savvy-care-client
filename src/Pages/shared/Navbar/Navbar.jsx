import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext } from "react";
import useAdmin from "../../../Hooks/useAdmin";
import useDoctor from "../../../Hooks/useDoctor";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isDoctor] = useDoctor();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navLinks = (
    <>
      <li className="text-white font-medium">
        <Link to="/">Home</Link>
      </li>
      <li className="text-white font-medium">
        <Link to="/doctorsProfile">Doctors House</Link>
      </li>
      <li className="text-white font-medium">
        <Link to="/appointment">Make an Appointment</Link>
      </li>

      {user && isAdmin && !isDoctor && (
        <li className="text-white font-medium">
          <Link to="/dashboard/adminHome">Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && !isDoctor && (
        <li className="text-white font-medium">
          <Link to="/dashboard/userHome">Dashboard</Link>
        </li>
      )}
      {(user || isDoctor) && !isAdmin && (
        <li className="text-white font-semibold">
          <Link to="/patientAndDoctor">Online Prescription</Link>
        </li>
      )}
    </>
  );
  return (
    <>
      <div
        className="navbar bg-opacity-30 text-purple lg:w-[1150px]  bg-gradient-to-r from-blue-900 to-blue-200 rounded-xl text-white"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-500 rounded-box w-52 text-white"
            >
              {navLinks}
            </ul>
          </div>
          <img
            className="w-32 h-12 rounded-2xl lg:block hidden"
            src="https://i.ibb.co/ccWYw9W/logo.jpg"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <h3 className="mr-5 text-white">{user.displayName}</h3>
              <img
                className="w-10 h-10 rounded-full mr-2"
                src={user.photoURL}
              />
              <button onClick={handleLogOut} className="btn btn-sm">
                Sign out
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
