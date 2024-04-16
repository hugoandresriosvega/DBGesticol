import { useForm } from "react-hook-form"
 import { useAuth } from "../context/authContext.jsx";
import { useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import imagenPrincipal from"../imagenPrincipal.png";

//registro de usuarios 

function RegisterPage() {
    const {register,
        handleSubmit,
         formState:{errors}
        } = useForm();
    const {signup,isAuthenticated, errors: RegisterErrors} = useAuth();
    const navigate = useNavigate();

    useEffect(()=> {
        if (isAuthenticated) navigate ("/login");
     }, [isAuthenticated])

  const onSubmit =  handleSubmit( async (values) =>{
        signup(values);
    }); 
    return (
        <div className=" flex h-[calc(100vh-100px)]  items-center justify-center">
            <img src={imagenPrincipal}  className="w-1/3 mx-1 mt-1 " />
    <div className="bg-trasparent max-w-md p-10 rounded-md border border-white">
        {
            RegisterErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white " key={i}>
            {error}
            </div>
            )) 
        }
        <h1 className="text-2x1 font-bold" >Registrarse</h1>
        <form onSubmit={onSubmit}>
            <input 
            type = "text"{...register("username",{required:true})}
            className="w-full bg-trasparent text-black px-4 py-2 rounded-md my-2 border border-white"
            placeholder="Username"/>
            {
                errors.username && (
                    <p className=" text-red-500">
                        Username is required
                    </p>
                )
            }

            <input 
            type = "email" {...register("email",{required:true})} 
            className="w-full bg-trasparent-500 text-black px-4 py-2 rounded-md my-2 border border-white"
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
            className="w-full bg-trasparent text-black px-4 py-2 rounded-md my-2 border border-white"
            placeholder="Password"/>
             {
                errors.password && (
                    <p className=" text-red-500">
                        password is required
                    </p>
                )
            }

            <button type="submit" className=" w-full rounded-full border border-white px-9 py-1">Registrar</button>       
        </form>
        <p className="flex gap-x-2 justify-between">
            ¿ya tienes una cuenta? 
            <Link to ="/login" className="text-white"> ingresa</Link>
            </p>
    </div>
    </div>
  )
};

export default RegisterPage