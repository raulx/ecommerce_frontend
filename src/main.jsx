import React from "react";
import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";

import { RouterProvider } from "react-router-dom";
import NavigationContextProvider from "./context/NavigationContext.jsx";
import router from "./utils/Router.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavigationContextProvider>
      <RouterProvider router={router} />
    </NavigationContextProvider>
  </React.StrictMode>
);
