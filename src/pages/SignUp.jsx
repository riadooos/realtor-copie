import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import OAauth from '../components/OAauth'

export default function SignUp() {
  const [showPass, setShowPass] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const {name, email, password} = formData

  const handelChange = name => event => {
    setFormData({...formData, [name]: event.target.value})
  }

  const handelSubmit = e => {
    e.preventDefault()
    console.log(formData)
  }
  return (
    <section>
      
       <h1 className='text-3xl text-center mt-6 font-bold'>Sign Up</h1>
    
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
          <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" alt="imageKey" className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
          <form onSubmit={handelSubmit}>
          <input type='text' id='name' value={name} onChange={handelChange('name')} placeholder="Your Name" className='w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' />
            <input type='email' id='email' value={email} onChange={handelChange('email')} placeholder="Email Adresse" className='w-full mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' />
            <div className='relative mb-6'>
              <input type={showPass ? 'text' :'password'} id='password' value={password} onChange={handelChange('password')} placeholder="password" className='w-full px-4 py-2 text-xl text-gray-700  bg-white border-gray-300 rounded transition ease-in-out' />
              {showPass ? (<AiFillEyeInvisible  className='absolute right-3 top-3 text-xl cursor-pointer' onClick={() => setShowPass((prevState) => !prevState)} />) : (<AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer' onClick={() => setShowPass((prevState) => !prevState)} />)}
            </div>
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
              <p className='mb-6'>Have an account?
                <Link to="/sign-in" className='text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-1'>Sign In</Link>
              </p>
              <p className='className=mb-6'><Link to='/forgot-password' className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'>Forgot password?</Link></p>
            </div>
            <button className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800' type='submit'>SignUp</button>
          <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
            <p className='text-center font-semibold mx-4'>OR</p>
          </div>
          <OAauth />
          </form>
         
        </div>
      </div>
    </section> 
   
  )
}

