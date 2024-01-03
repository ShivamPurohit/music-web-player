import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import LibraryProvider from "./contexts/library.context";
import "./index.css";
import router from "./routes/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LibraryProvider>
      <RouterProvider router={router} />
    </LibraryProvider>
  </React.StrictMode>
);
