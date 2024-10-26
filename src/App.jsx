import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <div className="w-full text-white bg-[#121212]">
      <Header/>
      <Outlet/>
      {/* <Footer/> */}
    </div>
    </>
  )
}

export default App
