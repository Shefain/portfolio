import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";

const RootLayout = () => {
    return (
    <>
        <header className=" relative bg-slate-700 text-slate-300">
            <Navbar  />
        </header>

        <main>
            {<Outlet/>}
        </main>
        
        <footer className="text-center h-[60px] bg-primary text-secondary w-screen ">
            <Footer />
        </footer>
    </>
     );
}
 
export default RootLayout;