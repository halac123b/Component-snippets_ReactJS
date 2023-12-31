import * as React from "react";
import { createRoot } from "react-dom/client";

// Import package React Router
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// Create a router
const router = createBrowserRouter([
  // List các path của website
  // Homepath
  {
    path: "/",
    // element: phần HTML của path
    // Link: route to another path
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

// Access element root và gắn router vừa tạo vào
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
