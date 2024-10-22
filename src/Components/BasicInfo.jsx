import React,{useState} from "react";
import Input from "./Input";
import { useDispatch,useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import {setBasicInfo} from '../store/UserSlice'
import {useForm} from 'react-hook-form';
import Button from "./button";
const BasicInfo = () => {
  const [error , setError] = useState('');
   const dispatch = useDispatch();
   const {register , handleSubmit} = useForm();
   const info = useSelector((state)=> state.resume.basicInfo)
   console.log(info)

   const onSubmit = (data)=>{
    try {
      setError
      if(data){
        dispatch(setBasicInfo(data))
        console.log(data)
      }
    } catch (error) {
      setError(error.message)
    }
   }

 
  return (
    <>
      <div className="w-full h-screen bg-[#121212] py-8 px-16">
        <div className="head py-4 ">
          <h1 className="text-3xl font-semibold mb-4">Basic Info</h1>
        </div>
        <div className="w-[70vw] h-[60vh]">
        {error && <p className="text-red-600 mt-8 text-center">{error}p</p>}
          <form onSubmit={handleSubmit(onSubmit,error)} className="flex flex-wrap gap-8">
            <Input
              label="Name"
              placeholder='Enter your Full Name'
              {...register("name",{
                required:true
              })}
            />
            <Input
              label="Email"
              placeholder='Enter your Email'
              {...register("email",{
                required:true,
                validate: {
                  matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              }
              })}
            />
            <Input
              label="Phone No"
              placeholder='Enter your Phone Number'
              type="number"
              {...register("phone",{
                required:true,
              })}
            />
            <Input
              label="LinkedIn Link"
              placeholder='Enter your LinkedIn profile link'
              {...register("linkedIn",{
                validate: {
                  matchPatern: (value) => /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i.test(value) ||
                  "Url must be valid",
              }
              })}
            />
            <Input
              label="GitHub Link"
              placeholder='Enter your GitHub profile link'
              {...register("github",{
                validate: {
                  matchPatern: (value) => /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i.test(value) ||
                  "Url must be valid",
              }
              })}
            />
            
            {/* <Link to='/summary'> */}
            <Button 
            type="submit"
            className="mt-7"
            >
            add
            </Button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
