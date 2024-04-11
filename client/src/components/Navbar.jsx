import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Navbar() {
    const { isAuthenticated,logout,user } = useAuth();

  return (
    <nav className=" bg-trasparent my-3 flex justify-between py-10 px-10 rounded-lg border border-white">
        
        <Link to ='/' >
        <h1 className="text-2xl font-bold">EYL Gesticol</h1>
        </Link>
        <ul className="flex  gap-x-2">
            {isAuthenticated ? (
                <>
                <li >
                welcome {user.username}
                </li>
                 <li>
                <Link to='/add-task'className="  rounded-full border border-white px-9 py-1"> + tareas</Link>
                 </li>
                 <li>
                <Link to="/" className="  rounded-full border border-white px-9 py-1"onClick={()=> {
                    logout()}}>
                        salir</Link>
                 </li>
        
                </>
            ): (

            <>
            <li>
            <Link to='/login'className="  rounded-full border border-white px-9 py-1">ingresar</Link>
             </li>
             <li>
             <Link to='/register'className="  rounded-full border border-white px-9 py-1">registrarse</Link>
            </li>
        
            </>
            )}
        </ul>
        
    </nav>
       
        
  );
};

export default Navbar;