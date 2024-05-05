import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
    return (
    <>
        <header className="relative h-16 bg-slate-700 text-slate-300">
            <Navbar/>
        </header>

        <main>
            {<Outlet/>}
        </main>
        
        <footer className="container m-auto">
            <h1 className=" text-center"> Footer </h1>
        </footer>
    </>
     );
}
 
export default RootLayout;