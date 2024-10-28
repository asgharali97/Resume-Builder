import React from 'react'
import BasicInfo from '../Components/BasicInfo'
import { useSelector } from 'react-redux'

const Home = () => {
  const info = useSelector((state) => state.resume.basicInfo)
  console.log(info)
  return (
    <>
      <div className="">
    <BasicInfo data={info}/>
      </div>
    </>
  )
}

export default Home

