// login de nuestra pagina 

import { useForm } from "react-hook-form"
import { useAuth } from "../context/authContext"
import { Link, useNavigate} from "react-router-dom";
import imagenPrincipal from"../imagenPrincipal.png";
import { useEffect } from "react";

function LoginPage() {
  const { register,
    handleSubmit,
    formState:{errors}
  } = useForm()
  const { signin,errors:signinErrors,isAuthenticated } = useAuth();
  const navigate = useNavigate()

  const onSubmit = handleSubmit(data =>{
    signin(data)
  });
  useEffect(()=> {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]) ;
  return (
    
    <div className=" flex h-[calc(100vh-100px)] items-center justify-center">
       <img src={imagenPrincipal}  className="w-1/4 mx-1 mt-1 " />
      <div className="  bg-trasparent max-w-md w-full p-10 rounded-md border border-white" >
      {
            signinErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white my-2" key={i}>
            {error}
            </div>
            ))
        } 
      <h1 className="text-2x1 font-bold" >Login</h1>
      <form onSubmit={onSubmit}>
           <input 
           type = "email" {...register("email",{required:true})} 
           className="w-full bg-trasparent text-black px-4 py-2 rounded-md my-2 border border-white"
           placeholder="Email"/>
            {
               errors.email && (
                   <p className=" text-red-500">
                       email is required
                   </p>
               )
           }
           
           <input
            type = "password" {...register("password",{required:true})}
           className="w-full bg- text-black px-4 py-2 rounded-md my-2 border border-white"
           placeholder="Password"/>
            {
               errors.password && (
                   <p className=" text-red-500 ">
                       password is required
                   </p>
               )
           }

           <button type="submit" className="w-full rounded-full border border-white px-9 py-1">Ingresar</button>       
       </form >
       <p className="flex gap-x-2 justify-between" >¿no tienes una cuenta? <Link to ="/register" className="text-white
       "> registrate</Link></p>
   
      </div>
    </div>
  )
};




export default LoginPage;