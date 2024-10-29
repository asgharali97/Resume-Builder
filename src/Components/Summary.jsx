import React from "react";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setSummary } from "../store/UserSlice";
import { useForm } from "react-hook-form";
import Button from "./button";

const Summary = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const savedData = localStorage.getItem("summary");
  //   if (savedData) {
  //     const parsedData = JSON.parse(savedData);
  //     Object.keys(parsedData).forEach((key) => setValue(key, parsedData[key]));
  //     dispatch(setSummary(parsedData));
  //   }
  // }, [dispatch, setValue]);

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      dispatch(setSummary(data));
      console.log(data);
      // localStorage.setItem("summary", JSON.stringify(data));
      navigate("/skills");
    }
  };
  return (
    <>
      <div className="w-full h-screen bg-[#121212] py-8 px-16">
        <div className="head py-4 ">
          <h1 className="text-3xl font-semibold mb-4">Summary</h1>
        </div>
        <div className="w-[70vw] h-[60vh]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-wrap gap-8 relative"
          >
            <Input
              label="Professional Title"
              placeholder="e.g Full Stack Developer , Data Scientist"
              className={`${errors.title ? "mt-5" : ""}`}
              {...register("sumtitle", {
                required: "Title is required",
                minLength: {
                  value: 3,
                  message: "Title must be at least 3 characters long",
                },
              })}
            />
            {errors.sumtitle && (
              <p className="text-red-600 absolute top-[4vh] px-1">
                {errors.sumtitle.message}
              </p>
            )}
            <Input
              label="Describe yourself"
              placeholder="Describe yourself in one or two line"
              className={`${errors.summary ? "mt-5" : ""}`}
              {...register("summary", {
                required: "summary is required",
                minLength: {
                  value: 3,
                  message: "summary must be at least 3 characters long",
                },
              })}
            />
            {errors.summary && (
              <p className="text-red-600 absolute top-[4vh] left-[32.5vw] px-1">
                {errors.summary.message}
              </p>
            )}
            <Link to="/basicInfo">
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
              className="flex items-center justify-between px-4 w-28 mt-4 absolute top-32 left-[54vw] hover:rotate-3 hover:bg-[#272727]"
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

export default Summary;
