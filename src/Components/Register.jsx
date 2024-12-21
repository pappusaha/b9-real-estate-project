import { Link, useLocation, useNavigate } from 'react-router';
import { IoEyeOutline } from "react-icons/io5";
import { useForm } from "react-hook-form"
import UseAuth from '../Hooks/UseAuth';

const Register = () => {

	const location =useLocation()
const navigate=useNavigate()
const form=location?.state || '/'

    const {createUser,updateUser}=UseAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
		console.log("Submitted Data:", data);
		const{email, password}=data
		createUser(email,password)
		.then(() => {
			updateUser(name, image).then=() => {
	navigate(form)
			}
			
		  })
	
		.catch((error) => {
			console.error("Error Creating User:", error.message);
		});

	  }


    return (
        <div className=' my-32 flex justify-center'>
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign Up</h1>
		<p className="text-sm text-gray-400">Sign up to access your account</p>
	</div>
	<form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-12">
        
		<div className="space-y-4">
        <label htmlFor="Name" className="text-sm">Name</label>
			<div className=''>
				<input {...register("firstName", { required: true})} type="text" name="firstName" id="name" placeholder="FullName" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"  />
				{errors.firstName?.type === 'required' && <p className='text-rose-600' role="alert">First name is required</p>}
               
			</div>
			<label htmlFor="image" className="text-sm">Image</label>
			<div className=''>
				<input {...register("image")} type="text" name="image" id="image" placeholder="Image" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"  />
				
               
			</div>

        <label htmlFor="email" className="text-sm">email</label>
			<div className=''>
				<input {...register("email", { required: true })} type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
				{errors.email?.type === 'required' && <p className='text-rose-600' role="alert">email name is required</p>}
               
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Password</label>
					
				</div>
			<div className='relative'>
            <input {...register("password", { required: true, maxLength: 20 })} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 " />
			{errors.password?.type === 'required' && <p className='text-rose-600' role="alert">Password name is required</p>}
            <IoEyeOutline className='w-10 h-6 absolute top-2 right-1 ' />
            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-400 text-end">Forgot password?</a>
            </div>
			</div>
		</div>
		<div className="space-y-2">
			<div>
				<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900">Sign Up</button>
			</div>
			<p className="px-6 text-sm text-center text-gray-800">Do have an account ?
				<Link to={'/login'} rel="noopener noreferrer" href="#" className="hover:underline text-violet-400">Log-In</Link>.
			</p>
		</div>
	</form>
</div>
        </div>
    );
};

export default Register;