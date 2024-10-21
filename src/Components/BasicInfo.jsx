import React,{useState} from "react";
import Input from "./Input";
import { useDispatch,useSelector } from "react-redux";
import {setBasicInfo} from '../store/UserSlice'
import {useForm} from 'react-hook-form';
const BasicInfo = () => {
  const [error , setError] = useState('');
   const dispatch = useDispatch();
   const {register , handleSubmit} = useForm();

 

   const onSubmit = (data)=>{
    try {
      setError('')
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
      <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Name"
              {...register("name",{
                required:true
              })}
            />
            <Input
              label="Position"
              {...register("position",{
                required:true
              })}
            />
            <button type="submit" className="bg-gray-500 text-white px-4 py-2">add</button>
          </form>
      </div>
    </>
  );
};

export default BasicInfo;

// import React,{useState} from 'react'
// import Input from './Input'
// import {useDispatch} from 'react-redux'
// import {useForm} from 'react-hook-form'

// const BasicInfo = () => {
//     const [error , setError] = useState('');
//     const dispatch = useDispatch();
//     const {register , handleSubmit} = useForm();

//     const LogIn = async (data)=>{
//         try {
//             setError('')
//             if(data){
//               dispatch(set)
//             }
//                 console.log(data)
                
//         } catch (error) {
//             setError(error.message)
//         }
//     }

//   return (
//     <>
//          <form onSubmit={handleSubmit(LogIn)}>
//           <div className="space-y-5">
//             <Input
//             label='Name'
//             placeholder='Enter your Name'
//             {...register(('name'),{
//              required : true,
//             })}
//             />
//             <Input
//             label='Position :'
//             placeholder='Enter your Position'
//             {...register(('position'),{
//                 required : true
//             })}
//             />
//             <button 
//             type='submit'
//             className="w-full"
//             >
//             Sing in 
//             </button>
//           </div>
//          </form>
//     </>   
//   )
// }

// export default BasicInfo

