import "../../styles/register.css";
import Logo from "../../assets/examRooms_logo.png";
import sign from"../../assets/signup_img.png"
import * as Yup from "yup";
import { useFormik } from "formik";
const Register = () => {
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
        <div className="Main " >
        <div className="container">
            <div className="Logo max-[620px]:pl-3 max-[620px]:mb-5 ">
                <img src={Logo} alt="Not Found"/>
            </div>
            <div className="content">
            <div className="img min-[621px]:hidden ">
                    <img src={sign}/>
                </div>
                <div className="buttom_left">
                <h2 className="text-3xl  font-poppins font-normal text-center mb-5 ">Sgin up</h2>
                <div className="form">
                <form onSubmit={formik.handleSubmit}>
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
                        <input className="inp"
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
                        <input className="inp"
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
                    <button type="submit" className="btn">Sign up</button>
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
