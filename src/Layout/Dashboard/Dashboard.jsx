import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "../../Pages/shared/footer/Footer";
import {
  FaHistory,
  FaHome,
  FaMoneyBill,
  FaPlus,
  FaUsers,
} from "react-icons/fa";
import { RiLogoutCircleRFill } from "react-icons/ri";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import { MdEmail, MdSettings } from "react-icons/md";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="flex">
        <div className="w-60 min-h-full bg-blue-50">
          <ul className="menu">
            {isAdmin ? (
              <>
                <h3 className="my-3">
                  <h1 className="font-bold text-2xl text-blue-500 ">
                    Smile Savvy Care{" "}
                  </h1>
                  <div className="flex gap-4 mt-4">
                    <img
                      className="rounded-3xl h-16 w-16"
                      src={user.photoURL}
                      alt=""
                    />
                    <div>
                      <h1>
                        {" "}
                        WellCome, <br />{" "}
                        <span className="text-blue-500 font-medium text-xl">
                          {user.displayName}
                        </span>{" "}
                      </h1>
                      <div className="flex gap-3 mt-3">
                        <MdEmail></MdEmail>
                        <MdSettings></MdSettings>
                      </div>
                    </div>
                  </div>
                </h3>
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/users">
                    <FaUsers></FaUsers> All Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addDoctor">
                    <FaPlus></FaPlus> Add a Doctor
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <h3 className="my-3">
                  <h1 className="font-bold text-2xl text-blue-500 ">
                    Smile Savvy Care{" "}
                  </h1>
                  <div className="flex gap-4 mt-4">
                    <img
                      className="rounded-3xl h-16 w-16"
                      src={user.photoURL}
                      alt=""
                    />
                    <div>
                      <h1>
                        {" "}
                        WellCome, <br />{" "}
                        <span className="text-blue-500 font-medium text-xl">
                          {user.displayName}
                        </span>{" "}
                      </h1>
                      <div className="flex gap-3 mt-3">
                        <MdEmail></MdEmail>
                        <MdSettings></MdSettings>
                      </div>
                    </div>
                  </div>
                </h3>
                <li>
                  <NavLink to="/dashboard/userHome">
                    <FaHome></FaHome> My Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/payment">
                    <FaMoneyBill></FaMoneyBill> Payment
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <FaHistory></FaHistory> Payment History
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
            <li>
              <button onClick={handleSignOut}>
                <RiLogoutCircleRFill></RiLogoutCircleRFill> Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-6">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
