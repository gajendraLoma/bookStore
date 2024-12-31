import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data, 'xxxxxx');


  return (
   <>
<div className='flex h-screen justify-center items-center dark:bg-slate-900 dark:text-white'>
<div  className='border-[2px] shadow-md p-5 rounded-md'>
  <div className="dark:bg-slate-900 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">

    <h3 className="font-bold text-lg">Contact Us!</h3>
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
        {errors.email && <span className=' text-xs text-red-500'>This field is required</span>}

    </div>
    {/* Message  */}
    <div className='mt-4 space-y-2'>
        <span>Message</span>
        <br/>
        <textarea type="text" 
        className='w-80 px-3 py-1 border rounded-md outline-none'
         placeholder='Type your message'
         {...register("message",)}
         />
      
    </div>
    {/* Button  */}
<div className='flex justify-between mt-4'>
<button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-pink-600 duration-300'>Submit</button>

</div>
</form>
  </div>
</div>
    </div>
   </>
  )
}

export default Contact
