import { Outlet } from "react-router-dom";
import Header from "../components/Header";



const Layout = () => {
    return (
        <div className="px-3 mt-[20px] max-w-[1440px] m-auto">
            <Header />
            <main className="mt-[100px] md:mt-[10px]"><Outlet /></main>
        </div>
    );
}

export default Layout;