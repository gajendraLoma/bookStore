import React from 'react'
import {Link} from 'react-router-dom'
import Login from "./login"
import { useForm } from "react-hook-form"

function signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data, 'xxxxxx');


  return (
   <>
    <div className='flex h-screen justify-center items-center '>
<div  className='w-[500px]'>
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

    <h3 className="font-bold text-lg">Signup!</h3>
     {/* Name */}
     <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br/>
        <input type="text" 
        className='w-80 px-3 py-1 border rounded-md outline-none'  
        placeholder='Enter your name'
        {...register("name", { required: true })}
        />
         <br/>
        {errors.name && <span className='text-xs text-red-500'>This field is required</span>}

    </div>
    {/* Email */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br/>
        <input type="email" 
        className='w-80 px-3 py-1 border rounded-md outline-none'  
        placeholder='Enter your email'
        {...register("email", { required: true })}
        />
         <br/>
        {errors.email && <span className='text-xs text-red-500'>This field is required</span>}

    </div>
    {/* Password  */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br/>
        <input type="password" 
        className='w-80 px-3 py-1 border rounded-md outline-none'
         placeholder='Enter your password'
         {...register("password", { required: true })}
         />
        <br/>
        {errors.password && <span className='ttext-xs text-red-500'>This field is required</span>}

    </div>
    {/* Button  */}
<div className='flex justify-between mt-4'>
<button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600 duration-300'>Login</button>
<p>Have account? <button
    onClick={()=>document.getElementById('my_modal_3').showModal()}
 className='text-pink-500'>Login</button></p>
 <Login />
</div>
</form>
  </div>
</div>
    </div>
   </>
  )
}

export default signup
