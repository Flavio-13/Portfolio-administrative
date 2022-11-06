import { Outlet } from "react-router-dom"
import { NavbarAdmin } from "../../Components/NavbarAdmin/NavbarAdmin";

export const Admin = () => {
    return(
        <div className="admin">
            <NavbarAdmin />
            <Outlet />
        </div>
    )
}