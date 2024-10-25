import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setWorkExp } from "../store/UserSlice";
import { useForm, useFieldArray } from "react-hook-form";
import Input from "./Input";
import Button from "./button";

const Experience = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, register, setValue, control, formState: { errors } } = useForm({
    defaultValues: {
      experiences: [{ role: "", companyName: "", duration: "", location: "", responsibilities: "", impact: "" }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("experience");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => setValue(key, parsedData[key]));
      dispatch(setWorkExp(parsedData));
    }
  }, [dispatch, setValue]);

  const submit = (data) => {
    if (Object.keys(errors).length === 0) {
      dispatch(setWorkExp(data));
      console.log(data);
      localStorage.setItem("experience", JSON.stringify(data));
      navigate("/projects");
    }
  };

  return (
    <>
      <div className="w-full min-h-[100vh] bg-[#121212] py-8 px-16">
        <div className="head py-4 ">
          <h1 className="text-3xl font-semibold mb-4">Experience</h1>
        </div>
        <div className="w-[64vw] h-[60vh]">
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-wrap gap-8 relative"
          >
            {fields.map((field, index) => (
              <div key={field.id} className="flex flex-wrap gap-8">
                <Input
                  label="Designation"
                  placeholder="Enter Title e.g: Full Stack Developer"
                  className={`${errors.role ? "mt-5" : ""}`}
                  {...register(`experiences[${index}].role`, {
                    minLength: {
                      value: 3,
                      message: "Must be at least 3 characters long",
                    },
                  })}

                />
                {errors?.experiences?.[index]?.role && (
                  <p className="text-red-600">{errors.experiences[index].role.message}</p>
                )}
            
            <Input
            label='Company Name'
            placeholder='Enter Company Name e.g: amazon'
            className={`${errors.companyName ? 'mt-5' : ""}`}
            {...register('companyName',{
              minLength: { 
                value: 3, 
                message: "must be at least 3 characters long" 
              } 
            })}
            />
            {errors.companyName && <p className="text-red-600 absolute top-[4vh] px-1">{errors.companyName.message}</p>}
            <Input
            label='Duration'
            placeholder='2018-2021'
            className={`${errors.duration ? 'mt-5' : ""}`}
            {...register('duration',{
              minLength: { 
                value: 3, 
                message: "must be at least 3 characters long" 
              } 
            })}
            />
            {errors.duration && <p className="text-red-600 absolute top-[4vh] px-1">{errors.duration.message}</p>}
            <Input
            label='Location'
            placeholder='Enter a Location e.g: remote'
            className={`${errors.location ? 'mt-5' : ""}`}
            {...register('location',{
              minLength: { 
                value: 3, 
                message: "must be at least 3 characters long" 
              } 
            })}
            />
            {errors.location && <p className="text-red-600 absolute top-[4vh] px-1">{errors.location.message}</p>}
            <Input
            label='Enter a Work description'
            placeholder='What your responsibilities were'
            className={`${errors.responsibilities ? 'mt-5' : ""}`}
            {...register('responsibilities',{
              minLength: { 
                value: 3, 
                message: "must be at least 3 characters long" 
              } 
            })}
            />
            {errors.responsibilities && <p className="text-red-600 absolute top-[4vh] px-1">{errors.responsibilities.message}</p>}
            <Input
            label='Impact'
            placeholder='Improvement or Impact you made in company'
            className={`${errors.impact ? 'mt-5' : ""}`}
            {...register('impact',{
              minLength: { 
                value: 3, 
                message: "must be at least 3 characters long" 
              } 
            })}
            />
            {errors.impact && <p className="text-red-600 absolute top-[4vh] px-1">{errors.impact.message}</p>}
            {fields.length > 1 && (
            <Button
            type="button"
            onClick={() => remove(index)}
            className="mt-4 abosloute  "
            >
            Remove Experience
            </Button>
            )}
            </div>
            ))}
            <Link to="/skills">
            <Button
              type="submit"
              className="flex items-center justify-between px-4 w-28 mt-4 top-32 hover:rotate-[-3deg] hover:bg-[#272727]"
            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#ffffff"
                  fill="none"
                >
                  <path
                    d="M3.99982 11.9998L19.9998 11.9998"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                prev
              </Button>
            </Link>
         <Button
              type="submit"
              className="flex items-center justify-between px-4 w-28 mt-4 absolute bottom-0 left-[54vw] hover:rotate-3 hover:bg-[#272727]"
            >
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
            <Button
            className='flex justify-center items-center absolute bottom-0 left-96 mt-12 h-7 px-2 hover:rotate-9 hover:bg-[#272727]'
              onClick={() =>
                append({
                  role: "",
                  companyName: "",
                  duration: "",
                  location: "",
                  responsibilities: "",
                  impact: "",
                })
              }
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#ffffff" fill="none">
             <path d="M12 4V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
             <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Experience;
