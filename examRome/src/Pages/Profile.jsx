import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import admin from"../assets/admin.png"
import Loading from '../Components/Loading';
import { useQuery } from '@tanstack/react-query';
import "../styles/editProfile.css"
import * as Yup from "yup";
import axios from 'axios'
import { useState } from 'react';
import { useFormik } from "formik";
import { useContext } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import toast, { Toaster } from 'react-hot-toast';
import { AUth } from '../Context/UserIdProvider';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Profile = () => {
 const [selectedImage, setSelectedImage] = useState(null);
 const [userPhoto, setUserPhoto] = useState(null);

const {setUserID,UserID}=useContext(AUth);
const EditProfileForm =useFormik({
    initialValues:{
        userID:UserID,
        userFName: '',
        userLName:'',
        userEmail:'',
        userPhone: '',
        userPassword:'',
       

    },
    validationSchema:Yup.object({
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
        .min(9,"Must not be less than 11 number"),
        userPassword:Yup.string()
        .min(6,"Must not be less than 6 char")
        .required("Password is requierd"),
       
    }),
    onSubmit:
    function(values){
       console.log('values',values)
        axios.put('https://localhost:7290/api/Profile/EditProfile',values, // Pass `values` as the second argument
          {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('tkn')}`
            }
          })
        .then(function(X){
            toast.success(X.data.message);
          console.log('true',X)

        })
        .catch(function(X){
            toast.error('failed to update profile')
          console.log('false',X);
        })
        
      },
})
function getUserProfile(){
    
    return axios.get(`https://localhost:7290/api/Profile/Profile`,{ headers: {
      'Authorization': `Bearer ${localStorage.getItem('tkn')}`
    }});
  } 
  const {data,isError,isLoading}=useQuery({
    queryKey: ['userProfile', UserID],
    queryFn:getUserProfile,

  });
  useEffect(() => {
    if (data) {
        console.log(data.data.userPhoto);
        setUserPhoto(data.data.userPhoto); 
      EditProfileForm.setValues({
        userID:UserID,
        userFName: data?.data?.userFName || '',
        userLName: data?.data?.userLName || '',
        userEmail: data?.data?.userEmail || '',
        userPhone: data?.data?.userPhone || '',
        userPassword:data?.data?.userPassword ||  '',
      
      });
    }
  }, [data]);
if(isLoading){
   return <Loading></Loading>
}
if(isError)
{console.log('error')
   return<h1>errror</h1>
}


   
  
    // Function to handle file input change
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setSelectedImage(file);
      }
    };
    const handleUpload = async () => {
        if (!selectedImage) {
         toast('Please select an image first!')
          return;
        }
      
        const formData = new FormData();
        formData.append("userPhoto", selectedImage);
      
        try {
          const response = await fetch(`https://localhost:7290/api/Profile/EditPhoto/${UserID}`, {
            method: "PUT",
            body: formData,
            
              headers: {
                'Authorization': `Bearer ${localStorage.getItem('tkn')}`
              }
            }
          );
      
          if (response.ok) {
           toast.success('Photo uploaded successfully!')
          } else {
             toast.error('failed in Photo uploaded successfully!')
          }
        } catch (error) {
          toast.error('failed in Photo uploaded successfully!')
          console.error("Error uploading photo:", error);
        }
      };
      

    return (
        <div className="prof-main ">
            
            <div className="edit-content pt-5 px-[50px]" >
                <div className="head   flex justify-end mr-10">
                <NotificationsOutlinedIcon className="text-gray-400 items-center  mr-4" style={{ fontSize: 40 }} />
                <img className="w-12" src={userPhoto ? `https://localhost:7290${userPhoto}` : admin} alt="User Photo" />
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
              
   

                <div className="edit w-3/4 relative  ">
                    <div className="img_edit mb-10 absolute lg:right-[-200px] top-0   ">
                       
                    <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{ width: "80px", height: "80px", marginTop: "10px" }}
          />
        </div>
      )}
      <button onClick={handleUpload}> <EditOutlinedIcon></EditOutlinedIcon>Upload Photo</button>
                    </div>
                    <div className="from  w-4/5">


                        <form className='frm' onSubmit={EditProfileForm.handleSubmit}>
                        <div className="flex">
                        <div className="lb ">
                            <label htmlFor="userFName">First Name</label>
                            <input className="inp"
                            
                                type="text"
                                name="userFName"
                                id="userFName"
                                value={EditProfileForm.values.userFName}
                                onChange={EditProfileForm.handleChange}
                                onBlur={EditProfileForm.handleBlur}
                               
                            />
                            {(EditProfileForm.errors.userFName && EditProfileForm.touched.userFName) && <div className="err">{EditProfileForm.errors.userFName}</div>}
                        </div>
                        <div className="lb ml-2">
                            <label htmlFor="userLName">Last Name</label>
                            <input className="inp"
                                
                                type="text"
                                name="userLName"
                                id="userLName"
                                value={EditProfileForm.values.userLName}
                                onChange={EditProfileForm.handleChange}
                                onBlur={EditProfileForm.handleBlur}
                               
                            />
                            {(EditProfileForm.errors.userLName && EditProfileForm.touched.userLName) && <div className="err">{EditProfileForm.errors.userLName}</div>}
                        </div>
                    </div>
                    <div className="lb">
                        <label htmlFor="userEmail">Email</label>
                        <input className="inp"
                      
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            value={EditProfileForm.values.userEmail}
                            onChange={EditProfileForm.handleChange}
                            onBlur={EditProfileForm.handleBlur}
                           
                        />
                        {(EditProfileForm.errors.userEmail && EditProfileForm.touched.userEmail) && <div className="err">{EditProfileForm.errors.userEmail}</div>}
                    </div>
                    <div className="lb">
                        <label htmlFor="userPhone">Phone Number</label>
                        <input className="inp w-3/4"
                      
                            type="text"
                            name="userPhone"
                            id="userPhone"
                            value={EditProfileForm.values.userPhone}
                            onChange={EditProfileForm.handleChange}
                            onBlur={EditProfileForm.handleBlur}
                            
                        />
                        {(EditProfileForm.errors.userPhone && EditProfileForm.touched.userPhone) && <div className="err">{EditProfileForm.errors.userPhone}</div>}
                    </div>
                    <div className="lb">
                        <label htmlFor="userPassword">password</label>
                        <input className="inp"
                   
                            type="password"
                            name="userPassword"
                            id="userPassword"
                            value={EditProfileForm.values.userPassword}
                            onChange={EditProfileForm.handleChange}
                            onBlur={EditProfileForm.handleBlur}
                            
                        />
                        {(EditProfileForm.errors.userPassword && EditProfileForm.touched.userPassword) && <div className="err">{EditProfileForm.errors.userPassword}</div>}
                    </div>
                   
                    <div className="flex max-[515px]:translate-x-10  absolute mt-5 -right-1">
                   <NavLink to='/home'> <button  className="but   bg-red-300 hover:bg-red-400 ">Cancel</button></NavLink>
                    <button type="submit" className="but w-48 bg-[#febc6e] hover:bg-[#fda53b]">Save Changes</button>
                    </div>
                        </form>
                    </div>
                </div>
                
            </div>
            
        </div>
    );

}

export default Profile;
