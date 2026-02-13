import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes"

function App() {

    return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" /> 
    </>
  );
}


export default App;

