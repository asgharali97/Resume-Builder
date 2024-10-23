import React,{useEffect, useState} from "react";
import Input from "./Input";
import { useDispatch,useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import {setBasicInfo} from '../store/UserSlice'
import {useForm} from 'react-hook-form';
import Button from "./button";
const BasicInfo = () => {
  const dispatch = useDispatch();
  const {register , handleSubmit,setValue , formState: { errors }} = useForm();
  const navigate = useNavigate();

   useEffect(()=>{
    const savedData = localStorage.getItem('basicInfo');
    if(savedData){
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => setValue(key, parsedData[key]));
      dispatch(setBasicInfo(parsedData))
    }
   },[dispatch,setValue])

   const onSubmit = (data)=>{
      if(Object.keys(errors).length === 0){
        dispatch(setBasicInfo(data))
        console.log(data)
        localStorage.setItem('basicInfo', JSON.stringify(data)); 
        navigate('/summary'); 
   }
   }
 
  return (
    <>
      <div className="w-full h-screen bg-[#121212] py-8 px-16">
        <div className="head py-4 ">
          <h1 className="text-3xl font-semibold mb-4">Basic Info</h1>
        </div>
        <div className="w-[70vw] h-[60vh]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap gap-8 relative">
            <Input
              label="Name"
              placeholder="Enter your Full Name"
              className={`${errors.name ? 'mt-5' : ''}`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-red-600 absolute top-[4vh] px-1">{errors.name.message}</p>}
            <Input
              label="Email"
              placeholder="Enter your Email"
              className={`${errors.email ? 'mt-5' : ''}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email address must be valid"
                }
              })}
            />
            {errors.email && <p className="text-red-600 absolute top-[4vh] left-[32.5vw] px-1">{errors.email.message}</p>}
            <Input
              label="Phone No"
              placeholder="Enter your Phone Number"
              className={`${errors.phone ? 'mt-5' : ''}`}
              type="number"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && <p className="text-red-600  absolute top-[25vh] px-1">{errors.phone.message}</p>}
            <Input
              label="LinkedIn Link"
              placeholder="Enter your LinkedIn profile link"
              className={`${errors.linkedIn ? 'mt-5' : ''}`}
              {...register("linkedIn", {
                pattern: {
                  value: /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i,
                  message: "LinkedIn URL must be valid"
                }
              })}
            />
            {errors.linkedIn && <p className="text-red-600 absolute top-[22vh] left-[32.5vw]">{errors.linkedIn.message}</p>}
            <Input
              label="GitHub Link"
              placeholder="Enter your GitHub profile link"
              className={`${errors.github ? 'mt-5' : ''}`}
              {...register("github", {
                pattern: {
                  value: /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i,
                  message: "GitHub URL must be valid"
                }
              })}
            />
            {errors.github && <p className="text-red-600 absolute top-[40vh] px-1">{errors.github.message}</p>}
            <Button type="submit" className="mt-7">
              Add
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
