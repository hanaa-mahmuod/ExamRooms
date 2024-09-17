// import logo from '../../assets/download.png'
// import googlelogo from '../../assets/flat-color-icons_google.png'
// import img1 from '../../assets/college entrance exam-pana 1.png'
import { useState } from 'react';
export default function LogIn() {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault(); // منع تحديث الصفحة عند الضغط على زر تسجيل الدخول

    try {
      const response = await fetch('http://localhost:5000/api/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email:email,
          password:password,
        }),
      });
  

      if (response.ok) {
        const data = await response.json();
        
        if (data) {
          console.log("success login")
          window.location.href = '/home'; // قم بتغيير هذا إلى المسار المناسب
        } else {
          console.log('Invalid email or password');
        }
      } else {
        console.log('Invalid email or password');
      }
    } catch (error) {
      console.error('There was an error logging in:', error);
      console.log('There was an error logging in');
    }
  };

  return (
   <>
    
   <div className='bg-[#F6F2EB]  px-[50px]   lg:px-[100px]   '>
   <div className=' flex justify-between items-center'>
       {/* <div><img src={logo} alt="logoProject" /></div>  */}
       {/* <div> <button class="text-black bg-[#febc6e] hover:bg-[#fda53b] focus:ring-4 focus:outline-none focus:ring-[#fda53b] font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button> </div> */}
   
    </div>
    <div className=' mt-[50px] grid md:grid-cols-2  lg:grid-cols-2  '>
    <div className=''>
    <h1 className='text-[25px] font-bold text-start mb-6'>Your Path to Exam Success Starts Here.</h1>
    <div>

<button className=' lg:ms-7 pb-5 text-center bg-gray-50  mb-10 text-gray-900 text-sm rounded-lg w-full hover:bg-[#fda53b]  focus:outline-none '><img src={""} alt="" className='w-[20px] translate-y-5 lg:translate-x-[170px] translate-x-[50px] ' />  Log in with Google </button>
  
  {/* <div className='flex '><hr className='text-black' /> <h1>or</h1> <hr /></div> */}
    <form  onSubmit={handleLogin} className="  w-full lg:ms-7">
  <div className="mb-5">
    <label  htmlFor="email" className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input 
    type="email" 
    id="email" 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-100 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email " required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    type="password" 
    id="password" 
    className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Enter your password' required />
  </div>
  <a href="" className=' inline-block text-red-500 hover:text-red-800 lg:translate-x-[220px]' >forget password?</a>
  <div className="flex items-start mb-5">
    
  </div>
  <button type="submit" className=" text-black bg-[#febc6e] hover:bg-[#fda53b] focus:ring-4 focus:outline-none focus:ring-[#fda53b] font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">Login</button>
</form>
    <div className='mt-[50px]'><h1>Create an Account? <a href="" className='text-[#febc6e] hover:text-[#fda53b]'>Sign UP</a></h1></div>
    </div>
    </div>
    <div className=''>
    <img src={""} alt="" className='w-full h-full' />
    </div>
    </div>
       

   </div>
   
   </>
  )
}
