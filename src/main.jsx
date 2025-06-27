
import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./provider/AppProvider";
import '../src/assets/styles/Styles.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AppProvider/>
  </React.StrictMode>,
)