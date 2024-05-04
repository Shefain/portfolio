import { NavLink, Outlet } from "react-router-dom";

const ResumeLayout = () => {
    return ( 
        <>
        <Outlet/>
        <h1> <NavLink to='/' > Home</NavLink></h1>
        </>
     );
}
 
export default ResumeLayout;