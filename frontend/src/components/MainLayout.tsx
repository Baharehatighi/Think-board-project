import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = ()=>  {
  return (
     <div className="min-h-screen bg-indigo-500">
      <Navbar />
      <main className="p-4 max-w-6xl mx-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout