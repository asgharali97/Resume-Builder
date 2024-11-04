import React from 'react'
import Input from './Input'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSkills } from '../store/UserSlice'
import Button from './button'
const Skills = () => {
   const {handleSubmit , register,control,formState: { errors }} = useForm();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   
   const onSubmit = (data)=>{
    if(Object.keys(errors).length === 0) {
        dispatch(setSkills(data));
        console.log(data);
        navigate('/experience')
    }
  
  }
  return (
    <>
       <div className="w-full min-h-screen bg-[#121212] py-8 px-16">
        <div className="head py-4 ">
          <h1 className="text-3xl font-semibold mb-4">Skills</h1>
        </div>
        <div className="w-[70vw]">
        <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap gap-8 relative"
        >
        <Input
        label='Languages'
        placeholder="Programming Languages e.g: Python, JavaScript"
        className={`${errors.languages ? "mt-5" : ""}`}
        {...register('languages',{
          minLength: {
            value: 3,
            message: "must be at least 3 characters long",
          },
        })}
        />
        {errors.languages && (
              <p className="text-red-600 absolute top-[4vh] px-1">
                {errors.languages.message}
              </p>
        )}
        <Input
        label='Frameworks'
        placeholder="Familiar Frameworks e.g: React, Angular"
        className={`${errors.frameworks ? "mt-5" : ""}`}
        {...register('frameworks',{
          minLength: {
            value: 3,
            message: "must be at least 3 characters long",
          },
        })}
        />
        {errors.frameworks && (
              <p className="text-red-600 absolute top-[4vh] px-1">
                {errors.frameworks.message}
              </p>
        )}
        <Input
        label='Developer Tools'
        placeholder="Familiar Tools e.g: Git"
        className={`${errors.devTools ? "mt-5" : ""}`}
        {...register('devTools',{
          minLength: {
            value: 3,
            message: "must be at least 3 characters long",
          },
        })}
        />
        {errors.devTools && (
              <p className="text-red-600 absolute top-[4vh] px-1">
                {errors.devTools.message}
              </p>
        )}
        <Input
        label='Database'
        placeholder="e.g: MongoDb, SQL"
        className={`${errors.database ? "mt-5" : ""}`}
        {...register('database')}
        />
        {errors.database && (
              <p className="text-red-600 absolute top-[4vh] px-1">
                {errors.database.message}
              </p>
        )}
        <Link to="/summary">
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
              className="flex items-center justify-between px-4 w-28 mt-4 absolute top-56 left-[54vw] hover:rotate-3 hover:bg-[#272727]"
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
        </form>
        </div>
        </div>

    </>
  )
}

export default Skills