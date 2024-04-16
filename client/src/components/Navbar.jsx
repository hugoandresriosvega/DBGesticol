import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import imagenPrincipal from "../imagenPrincipal.jpg";



function Navbar() {
    const { isAuthenticated,logout,user } = useAuth();

  return (
    <nav className=" bg-transparent my-3 flex justify-between py-10 px-10 rounded-lg ">
        
        <Link to ='/' >
        <div className="w-full h-20 object-cover rounded-md"> <img src={imagenPrincipal} className="w-full h-full object-cover rounded-md"/></div>
        </Link>
        <ul className="flex  gap-x-2 text-black">
            {isAuthenticated ? (
                <>
                <li >
                welcome {user.username}
                </li>
                 <li>
                <Link to='/add-task'className="  rounded-full border border-black px-9 py-1 text-black"> + tareas</Link>
                 </li>
                 <li>
                <Link to="/" className="  rounded-full border border-black px-9 py-1 text-black"onClick={()=> {
                    logout()}}>
                        salir</Link>
                 </li>
        
                </>
            ): (

            <>
            <li>
            <Link to='/login'className="  rounded-full border border-black px-9 py-1 text-black">ingresar</Link>
             </li>
             <li>
             <Link to='/register'className="  rounded-full border border-black px-9 py-1 text-black">registrarse</Link>
            </li>
        
            </>
            )}
        </ul>
        
    </nav>
       
        
  );
};

export default Navbar;