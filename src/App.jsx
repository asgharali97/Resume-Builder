import BasicInfo from "./Components/BasicInfo"
import {useDispatch, useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const {basicInfo,workExp} = useSelector((state) => state.resume)
  console.log(basicInfo)
  return (
    <>
    <div className="h-screen w-full text-white bg-[#121212]">
     <BasicInfo BasicInfo={basicInfo} setBasicInfo={(data)=>dispatch(setBasicInfo(data))}/>
    </div>
    </>
  )
}

export default App
