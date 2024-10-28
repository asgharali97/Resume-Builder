import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setProjects, removeProjects } from "../store/UserSlice";
import { useForm, useFieldArray } from "react-hook-form";
import Input from "./Input";
import Button from "./button";

const Projects = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      projects: [
        {
          projectName: "",
          tech: "",
          deployedLink: "",
          githubLink: "",
          description: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects",
  });

  // useEffect(() => {
  //   const savedData = localStorage.getItem("projects");
  //   if (savedData) {
  //     const parsedData = JSON.parse(savedData);
  //     Object.keys(parsedData).forEach((key) => setValue(key, parsedData[key]));
  //     dispatch(setProjects(parsedData));
  //   }
  // }, [setValue, dispatch]);

  const submit = (data) => {
    if (Object.keys(errors).length === 0) {
      dispatch(setProjects(data));
      console.log(data)
      // localStorage.setItem("projects", JSON.stringify(data));
      navigate("/education");
    }
  };
  
  const removePro = (index)=>{
    remove(index)
    dispatch(removeProjects(index))
  }

  return (
    <div className="w-full py-8 px-16">
      <div className="head py-4 ">
        <h1 className="text-3xl font-semibold mb-4">Project</h1>
      </div>
      <div className="w-[64vw] h-[60vh]">
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-wrap gap-8 relative"
        >
          {fields.map((field, index) => (
            <div key={field.id} className="flex flex-wrap gap-8">
              <Input
                label="Project Name"
                placeholder="e.g: E-Commerce Website"
                className={`${errors.projectName ? "mt-5" : ""}`}
                {...register(`projects.${index}.projectName`, {
                  minLength: {
                    value: 3,
                    message: "Project Name Must be at least 3 characters long",
                  },
                })}
              />
              {errors?.projects?.[index]?.projectName && (
                <p className="text-red-600">
                  {errors.projects[index].projectName.message}
                </p>
              )}

              <Input
                label="Teach Stack"
                placeholder="e.g: React, Node,"
                className={`${errors.tech ? "mt-5" : ""}`}
                {...register("tech", {
                  minLength: {
                    value: 3,
                    message: "Teach Stack Name must be at least 3 characters long",
                  },
                })}
              />
              {errors.tech && (
                <p className="text-red-600 absolute top-[4vh] px-1">
                  {errors.tech.message}
                </p>
              )}

              <Input
                label="Deployed Link"
                placeholder="Enter a your project Deployed Link"
                className={`${errors.deployedLink ? "mt-5" : ""}`}
                {...register("deployedLink", {
                  pattern: {
                    value: /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i,
                    message: "Deployed URL must be valid"
                  }
                })}
              />
              {errors.deployedLink && (
                <p className="text-red-600 absolute top-[4vh] px-1">
                  {errors.deployedLink.message}
                </p>
              )}

              <Input
                label="GitHub Link"
                placeholder="Enter a GitHub Link"
                className={`${errors.githubLink ? "mt-5" : ""}`}
                {...register("githubLink", {
                  pattern: {
                    value: /^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i,
                    message: "GitHub URL must be valid"
                  }
                })}
              />
              {errors.githubLink && (
                <p className="text-red-600 absolute top-[4vh] px-1">
                  {errors.githubLink.message}
                </p>
              )}

              <Input
                label="Enter a your project description"
                placeholder="Enter one or two line description"
                className={`${errors.description ? "mt-5" : ""}`}
                {...register("description", {
                  minLength:{
                    value:3,
                    message:'Description must be at least 3 character long'
                  }
                })}
              />
              {errors.description && (
                <p className="text-red-600 absolute top-[4vh] px-1">
                  {errors.description.message}
                </p>
              )}
              <div className="w-full flex justify-center items-center">
                  {fields.length > 1 && (
                    <Button
                      type="button"
                      onClick={() => removePro(index)}
                      className="mt-4 flex items-center justify-between px-4 w-36 hover:rotate-3 hover:bg-[#272727]"
                    >
                      Remove
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        color="#ffffff"
                        fill="none"
                      >
                        <path
                          d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M9.5 16.5L9.5 10.5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M14.5 16.5L14.5 10.5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </Button>
                  )}
                </div>
            </div>
          ))}
           <Link to="/experience">
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
                  projectName: "",
                  tech: "",
                  deployedLink: "",
                  githubLink: "",
                  description: "",
                })
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#ffffff"
                fill="none"
              >
                <path
                  d="M12 4V20"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 12H20"
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
  );
};

export default Projects;