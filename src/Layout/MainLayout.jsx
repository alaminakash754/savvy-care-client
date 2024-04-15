import { Outlet } from "react-router-dom";
import NavBar from "../Pages/shared/Navbar/Navbar";
import Footer from "../Pages/shared/footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;