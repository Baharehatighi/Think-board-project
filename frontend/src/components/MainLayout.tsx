import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";


const MainLayout = ()=>  {
  const [isOpen, setIsOpen] = useState(false);
  function setMode(_arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
     <div className="overflow-hidden min-h-screen bg-indigo-500">
      <Navbar onCreate={()=> setMode("create")} />

      <main className="p-4 max-w-6xl mx-auto">
        <Outlet context={{isOpen, setIsOpen}} 
        />
      </main>



    </div>
  )
}

export default MainLayout