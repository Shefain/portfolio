import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";

const RootLayout = () => {
    return (
    <>
        <header className="relative h-16 bg-slate-700 text-slate-300">
            <Navbar  />
        </header>

        <main>
            {<Outlet/>}
        </main>
        
        <footer>
            <Footer />
        </footer>
    </>
     );
}
 
export default RootLayout;