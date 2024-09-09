import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import admin from"../assets/admin.png"
import "../styles/editProfile.css"
import * as Yup from "yup";
import { useFormik } from "formik";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
const Profile = () => {
    const formik=useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            email:"",
            phonNumber:"",
            password:"",
            confirmPassword:""

        },
        validationSchema:Yup.object().shape({
            firstName:Yup.string()
            .required("firstName is Requierd")
            .min(3,"Must be more than 3 characters"),
            lastName:Yup.string()
            .required("lastName is Requierd")
            .min(3,"Must be more than 3 characters"),
            email:Yup.string()
            .required("Email Requierd")
            .email("Invalid Email"),
            phonNumber:Yup.string()
            .required("phoneNumber is requierd")
            .min(11,"Must not be less than 11 number"),
            password:Yup.string()
            .min(6,"Must not be less than 6 char")
            .required("Password is requierd"),
            confirmPassword:Yup.string()
            .required("Confirm password require")
            .oneOf([Yup.ref("password"),""],"Password confirmation must match password")
        }),
        onSubmit:(values)=>{
            console.log("supmited form")
            console.log({values});
        }
    })

    return (
        <div className="prof-main ">
            
            <div className="edit-content pt-5">
                <div className="head   flex justify-end mr-10">
                <NotificationsOutlinedIcon className="text-gray-400 items-center  mr-4" style={{ fontSize: 40 }} />
                    <img className="w-12" src={admin}/>
                </div>
                <div className="path pt-5 pl-2 ">
                <div className=" flex" >
                    <IconButton
                        style={{ borderRadius: '50%', backgroundColor: '#FFFFFF', padding: '14px' }}
                        color="#00000"
                        aria-label="back"
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <span className="ml-4 translate-y-1.5 text-2xl  font-poppins font-normal">
                        Edit Profile
                    </span>
                </div>
                </div>
                <div className="edit w-3/4 relative  pt-20">
                    <div className="img_edit mb-10 flex absolute right-2 top-0 ">
                        <div className="absolute bg-gray-300 right-[90%] text-white -bottom-1"> <EditOutlinedIcon style={{ fontSize: 30}} /></div>
                        <img className="w-28" src={admin} alt="Not Found"/>
                    </div>
                    <div className="from  w-4/5">
                        <form className='frm'>
                        <div className="flex">
                        <div className="lb ">
                            <label htmlFor="firstname">First Name</label>
                            <input className="inp"
                            placeholder="First Name"
                                type="text"
                                name="firstName"
                                id="firstname"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {(formik.errors.firstName && formik.touched.firstName) && <div className="err">{formik.errors.firstName}</div>}
                        </div>
                        <div className="lb ml-2">
                            <label htmlFor="lastname">Last Name</label>
                            <input className="inp"
                                placeholder="Last Name"
                                type="text"
                                name="lastName"
                                id="lastname"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {(formik.errors.lastName && formik.touched.lastName) && <div className="err">{formik.errors.lastName}</div>}
                        </div>
                    </div>
                    <div className="lb">
                        <label htmlFor="email">Email</label>
                        <input className="inp"
                        placeholder="Email"
                            type="email"
                            name="email"
                            id="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {(formik.errors.email && formik.touched.email) && <div className="err">{formik.errors.email}</div>}
                    </div>
                    <div className="lb">
                        <label htmlFor="phNumber">Phone Number</label>
                        <input className="inp w-3/4"
                        placeholder="Phone Number"
                            type="text"
                            name="phonNumber"
                            id="phNumber"
                            value={formik.values.phonNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {(formik.errors.phonNumber && formik.touched.phonNumber) && <div className="err">{formik.errors.phonNumber}</div>}
                    </div>
                    <div className="lb">
                        <label htmlFor="pass">password</label>
                        <input className="inp"
                        placeholder="Password"
                            type="password"
                            name="password"
                            id="pass"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {(formik.errors.password && formik.touched.password) && <div className="err">{formik.errors.password}</div>}
                    </div>
                    <div className="lb">
                        <label htmlFor="cpass">Confirm Password</label>
                        <input className="inp w-3/4"
                        placeholder="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            id="cpass"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {(formik.errors.confirmPassword && formik.touched.confirmPassword) && <div className="err">{formik.errors.confirmPassword}</div>}
                    </div>
                    <div className="flex max-[515px]:translate-x-10  absolute mt-5 -right-1">
                    <button  className="but   bg-[#FFFFFF]">Cancel</button>
                    <button type="submit" className="but w-48 bg-primary">Save Changes</button>
                    </div>
                        </form>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}

export default Profile;
