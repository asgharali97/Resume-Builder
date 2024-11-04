import React from "react";
import Input from "./Input";
import { useDispatch,useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import {setBasicInfo} from '../store/UserSlice'
import {useForm, useFieldArray} from 'react-hook-form';
import Button from "./button";
const BasicInfo = () => {
  const dispatch = useDispatch();
  const {register , handleSubmit, control, formState: { errors }} = useForm({
    
  });
  const { fields, append, remove } = useFieldArray({ control, name: "link" });
  const navigate = useNavigate();

   const onSubmit = (data)=>{
      if(Object.keys(errors).length === 0){
        dispatch(setBasicInfo(data))
        console.log(data)
        navigate('/summary'); 
   }
   }
 
  return (
    <>
      <div  className="min-h-screen w-full bg-[#121212] py-8 px-16">
        <div className="head py-4 ">
          <h1 className="text-3xl font-semibold mb-4">Basic Info</h1>
        </div>
        <div className="w-[64vw]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap gap-8 relative">
            <Input
              label="Name"
              placeholder="Enter your Full Name"
              className={`${errors.name ? 'mt-5' : ''}`}
              {...register("name", { 
                required: "Name is required",
                minLength: { 
                  value: 3, 
                  message: "Name must be at least 3 characters long" 
                } 
              })}
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
            {fields.map((field, index) => (
              <div key={field.id} className="">
                <Input
                  label={`Social Links ${index + 1}`}
                  placeholder="Enter Link"
                  {...register(`more.${index}.number`)}
                />
                {errors.link?.[index]?.number && (
                  <p className="text-red-600">{errors.link[index].number.message}</p>
                )}
                <Button type="button" className='mt-8 h-10 px-6 hover:-rotate-3 hover:bg-[#272727]' onClick={() => remove(index)}>Remove</Button>
              </div>
            ))}
            <Button className="mt-12 h-7 px-2 hover:rotate-90 hover:bg-[#272727]" onClick={()=> append({number : ''})}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
             <path d="M12 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
             <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </Button>
            <Button type="submit" className="flex items-center justify-between px-4 w-28 mt-9 absolute bottom-0 right-0 hover:rotate-3 hover:bg-[#272727]">
            Next
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="26"
                height="26"
                color="#ffffff"
                fill="none"
              >
                <path
                  d="M20.0001 11.9998L4.00012 11.9998"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
