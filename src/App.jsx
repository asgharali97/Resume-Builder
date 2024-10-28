import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  return (
    <>
    <div className="w-full min-h-screen text-white bg-[#121212]">
      <Header/>
      <Outlet/>
    </div>
    </>
  )
}

export default App
