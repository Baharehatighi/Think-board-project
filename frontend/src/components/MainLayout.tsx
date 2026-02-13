import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";


const MainLayout = ()=>  {
  const [isOpen, setIsOpen] = useState(false);
  return (
     <div className="overflow-hidden min-h-screen bg-indigo-500">
      <Navbar onCreate={()=> setIsOpen(true)} />
      <main className="p-4 max-w-6xl mx-auto">
        <Outlet context={{isOpen, setIsOpen}} 
        />
      </main>
      {/* <button onClick={() => setIsOpen(true)}></button> */}


    </div>
  )
}

export default MainLayout