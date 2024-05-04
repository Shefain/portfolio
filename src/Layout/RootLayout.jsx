import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
    return (
    <>
        <header className="h-16 bg-slate-700 text-slate-300">
            <Navbar/>
        </header>

        <main className= " container m-auto px-4 ">
            {<Outlet/>}
        </main>
        
        <footer className="container m-auto px-4 ">
            <h1 className=" p-10  text-center"> Footer </h1>
        </footer>
    </>
     );
}
 
export default RootLayout;