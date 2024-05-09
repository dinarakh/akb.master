import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./Router";
import HeaderComponents from "./Components/Header/HeaderComponents";



export default function App() {
  return (
    <>
    <Router>
          <AppRoutes />
      </Router>
    </>
  );
}
