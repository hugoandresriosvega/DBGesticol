import { Navigate,Outlet} from "react-router-dom"
import { useAuth } from "./context/authContext.jsx"

function ProtectedRoute() {
    const { loading , isAuthenticated} = useAuth ();
    console.log(loading,isAuthenticated)

    if (loading) return
    <h1>Loading....</h1>

    if (!isAuthenticated) return <Navigate to ="/login" replace />
  
    return <Outlet/>;
}

export default ProtectedRoute;