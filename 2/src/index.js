import * as React from "react";
import { createRoot } from "react-dom/client";

// Import package React Router
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navbar from "./components/Navbar";

const AppLayout = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

// Create a router
const router = createBrowserRouter([
  // List các path của website
  // Homepath
  {
    path: "/",
    // element: phần HTML của path
    // Link: route to another path
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

// Access element root và gắn router vừa tạo vào
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
