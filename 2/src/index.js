import * as React from "react";
import { createRoot } from "react-dom/client";

// Import package React Router
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import ErrorPage from "./routes/ErrorPage";
import Navbar from "./components/Navbar";
import Contact from "./routes/Contact";
import "./App.css";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

// Create a router
const router = createBrowserRouter([
  // List các path của website
  {
    element: <AppLayout />,
    // Page xuất hiện nếu quá trình routing xảy ra lỗi
    errorElement: <ErrorPage />,
    children: [
      {
        // Homepath
        path: "/",
        // element: phần HTML của path
        // Link: route to another path
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

// Access element root và gắn router vừa tạo vào
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
