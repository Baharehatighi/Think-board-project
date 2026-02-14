import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import NotesPage from "../pages/NotesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <NotesPage />,
      },
  
    ],
  },
]);
