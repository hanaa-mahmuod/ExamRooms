import "../../styles/register.css";
import Logo from "../../assets/examRooms_logo.png";
import sign from"../../assets/signup_img.png"
import {Toast} from"../../Sweetalert"
import toast from "react-hot-toast";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import LogIn from './LogIn';
const Register = () => {
    const navigate =useNavigate()
    const formik=useFormik({
        initialValues:{
            userFName:"",
            userLName:"",
            userEmail:"",
            userPhone:"",
            userPassword:"",
            userConfPassword:""

        },
        validationSchema:Yup.object().shape({
            userFName:Yup.string()
            .required("firstName is Requierd")
            .min(3,"Must be more than 3 characters"),
            userLName:Yup.string()
            .required("lastName is Requierd")
            .min(3,"Must be more than 3 characters"),
            userEmail:Yup.string()
            .required("Email Requierd")
            .email("Invalid Email"),
            userPhone:Yup.string()
            .required("phoneNumber is requierd")
            .min(11,"Must not be less than 11 number"),
            userPassword:Yup.string()
            .min(8,"Must not be less than 6 char")
            .required("Password is requierd")
            .matches(/[a-zA-Z]/, "Password must contain letters")
            .matches(/[0-9]/, "Password must contain numbers")
            .matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, "Password must contain special characters"),
            userConfPassword:Yup.string()
            .required("Confirm password require")
            .oneOf([Yup.ref("userPassword"),""],"Password confirmation must match password")
        }),
        onSubmit:
        function(values){
            console.log('values',values)
             axios.post('https://localhost:7290/api/Registration',values, // Pass `values` as the second argument
              )
             .then(function(X){
                 toast.success(X.data.message);
               console.log('true',X)
     
             })
             .catch(function(X){
                 toast.error('failed to update profile')
               console.log('false',X);
             })
             
           },
        // async(values)=>{
        //     try{
        //         const response =await fetch("https://localhost:7290/api/Registration",{
        //             method:"Post",
        //             headers:{
        //                 "Content-Type":"application/json"
        //             },
        //             body: JSON.stringify({
        //                 userFName: values.userFName,
        //                 userLName: values.userLName,
        //                 userEmail: values.userEmail,
        //                 userPhone: values.userPhone,
        //                 userPassword: values.userPassword,
        //                 userConfPassword: values.userConfPassword
        //             })
        //         });
        //         if(response.ok){
                 
        //             const data = await response.json();
        //             Toast.fire({
        //                 icon: "success",
        //                 title: "Registration Success",
        //                 text: data.message
        //             });
        //             navigate("/login");
        //             } else {
        //             // إذا كانت الاستجابة بها خطأ
        //             if (response.status === 409) {
        //                 // التعامل مع خطأ تعارض (البريد الإلكتروني موجود بالفعل)
        //                 formik.setErrors({
        //                 email: data.message
        //                 });
        //                 Toast.fire({
        //                 icon: "error",
        //                 title: "Registration Failed",
        //                 text: data.message
        //                 });
        //             } else {
        //                 Toast.fire({
        //                 icon: "error",
        //                 title: "Registration Failed",
        //                 text: data.message || "An error occurred during registration."
        //                 });
        //             }
        //             console.error("RRRegistration failed:", data);
        //             }
        //         } catch (err) {
        //             console.error("Network error:", err);
        //             Toast.fire({
        //             icon: "error",
        //             title: "Registration Failed",
        //             text: "Network error occurred. Please try again later."
        //             });
        //         }
        //     }
    })

    
    return (
        <div className="Main bg-[#F6F2EB]  w-full  p-[50px]" >
        <div className="container">
        <div className=' flex justify-between items-center'>
       <div ><img src={Logo}  alt="logoProject" /></div> 
     <NavLink to='/Login'>  <div> <button class="text-black bg-[#febc6e] hover:bg-[#fda53b] focus:ring-4 focus:outline-none focus:ring-[#fda53b] font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button> </div></NavLink>
   
    </div>
            <div className="content">
          
                <div className="buttom_left">
                <h2 className="text-3xl  font-poppins font-normal text-center mb-5 ">Sgin up</h2>
                <div className="form bg-[#F6F2EB] ">
                <form onSubmit={formik.handleSubmit} className="bg-[#F6F2EB] " >
                    <div className="flex">
                        <div className="lb ">
                            <label htmlFor="firstname">First Name</label>
                            <input className="inp"
                            placeholder="First Name"
                                type="text"
                                name="userFName"
                                id="firstname"
                                value={formik.values.userFName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {(formik.errors.firstName && formik.touched.userFName) && <div className="err">{formik.errors.userFName}</div>}
                        </div>
                        <div className="lb ml-2">
                            <label htmlFor="lastname">Last Name</label>
                            <input className="inp"
                                placeholder="Last Name"
                                type="text"
                                name="userLName"
                                id="lastname"
                                value={formik.values.userLName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {(formik.errors.userLName && formik.touched.userLName) && <div className="err">{formik.errors.userLName}</div>}
                        </div>
                    </div>
                    <div className="lb">
                        <label htmlFor="email">Email</label>
                        <input className="inp"
                        placeholder="Email"
                            type="email"
                            name="userEmail"
                            id="email"
                            value={formik.values.userEmail}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {(formik.errors.userEmail && formik.touched.userEmail) && <div className="err">{formik.errors.userEmail}</div>}
                    </div>
                    <div className="lb">
                        <label htmlFor="phNumber">Phone Number</label>
                        <input className="inp"
                        placeholder="Phone Number"
                            type="text"
                            name="userPhone"
                            id="phNumber"
                            value={formik.values.userPhone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {(formik.errors.userPhone && formik.touched.userPhone) && <div className="err">{formik.errors.userPhone}</div>}
                    </div>
                    <div className="lb">
                        <label htmlFor="pass">password</label>
                        <input className="inp"
                        placeholder="Password"
                            type="password"
                            name="userPassword"
                            id="pass"
                            value={formik.values.userPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {(formik.errors.userPassword && formik.touched.userPassword) && <div className="err">{formik.errors.userPassword}</div>}
                    </div>
                    <div className="lb">
                        <label htmlFor="cpass">Confirm Password</label>
                        <input className="inp"
                        placeholder="Confirm Password"
                            type="password"
                            name="userConfPassword"
                            id="cpass"
                            value={formik.values.userConfPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {(formik.errors.userConfPassword && formik.touched.userConfPassword) && <div className="err">{formik.errors.userConfPassword}</div>}
                    </div>
                    <button type="submit" className="btn mb-5">Sign up</button>
                    <div><h1>Do You Have Account? <NavLink to='/Login'><span className="font-bold text-[#FEC887]">Login Now!</span></NavLink></h1></div>
                </form>
                </div>
                </div>
                <div className="img max-[620px]:hidden ">
                    <img src={sign}/>
                </div>
            </div>
        </div>
            
        </div>
    );
}

export default Register;
