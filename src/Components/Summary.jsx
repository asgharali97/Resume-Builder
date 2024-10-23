import React, { useEffect, useState } from "react";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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

  useEffect(() => {
    const savedData = localStorage.getItem("summary");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => setValue(key, parsedData[key]));
      dispatch(setSummary(parsedData));
    }
  }, [dispatch, setValue]);

  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      dispatch(setSummary(data));
      console.log(data);
      localStorage.setItem("summary", JSON.stringify(data));
      navigate("/skills");
    }
  };
  return (
    <>
      <div className="w-full h-screen bg-[#121212] py-8 px-16">
        <div className="head py-4 ">
          <h1 className="text-3xl font-semibold mb-4">Basic Info</h1>
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
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="text-red-600 absolute top-[7vh] px-1">
                {errors.title.message}
              </p>
            )}
            <Input
              label="Describe yourself"
              placeholder="Describe yourself in one or two line"
              className={`${errors.summary ? "mt-5" : ""}`}
              {...register("summary", {
                required: "summary is required",
              })}
            />
            {errors.summary && (
              <p className="text-red-600 absolute top-[7vh] left-[32.5vw] px-1">
                {errors.summary.message}
              </p>
            )}
            <Button type="submit" className="mt-4 absolute top-32 left-[54vw]">
              Add
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Summary;
