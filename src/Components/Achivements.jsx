import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setAchievements } from "../store/UserSlice";
import Input from "./Input";
import Button from "./button";
const achivements = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();


  const submit = (data) => {
    if (Object.keys(errors).length === 0) {
      dispatch(setAchievements(data));
      navigate("/resumeGernator");
    }
  };
  return (
    <>
      <div className="min-h-screen w-full py-8 px-16">
        <div className="head py-4 ">
          <h1 className="text-3xl font-semibold mb-4">Achievement</h1>
        </div>
        <div className="w-[64vw]">
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-wrap gap-8 relative"
          >
            <Input
              label="Achievements 1"
              placeholder="e.g: Any Hackathon Win"
              className={`${errors.achievements1 ? "mt-5" : ""}`}
              {...register("achievements1", {
                minLength: {
                  value: 3,
                  message: "Achievement must be at least 3 character long",
                },
              })}
            />
            {errors.achievements1 && (
              <p className="text-red-600">{errors.achievements1.message}</p>
            )}
            <Input
              label="Achievements 2"
              placeholder="e.g: Any Coding Contest"
              className={`${errors.achievements2 ? "mt-5" : ""}`}
              {...register("achievements2", {
                minLength: {
                  value: 3,
                  message: "Achievement must be at least 3 character long",
                },
              })}
            />
            {errors.achievements2 && (
              <p className="text-red-600">{errors.achievements2.message}</p>
            )}
            <Input
              label="Achievements 3"
              placeholder="e.g: Any Hackathon Win"
              className={`${errors.achievements3 ? "mt-5" : ""}`}
              {...register("achievements3", {
                minLength: {
                  value: 3,
                  message: "Achievement must be at least 3 character long",
                },
              })}
            />
            {errors.achievements3 && (
              <p className="text-red-600">{errors.achievements3.message}</p>
            )}
            <Input
              label="Achievements 4"
              placeholder="e.g: Any Coding Contest Win"
              className={`${errors.achievements4 ? "mt-5" : ""}`}
              {...register("achievements4", {
                minLength: {
                  value: 3,
                  message: "Achievement must be at least 3 character long",
                },
              })}
            />
            {errors.achievements4 && (
              <p className="text-red-600">{errors.achievements4.message}</p>
            )}

            <Link to="/education">
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
          </form>
        </div>
      </div>
    </>
  );
};

export default achivements;
