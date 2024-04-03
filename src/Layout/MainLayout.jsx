import { Outlet } from "react-router-dom";
import NavBar from "../Pages/shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;