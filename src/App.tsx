import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Homepage } from "./Homepage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainRoutes } from "./Routes/MainRoutes";

function App() {
  return (
    <ChakraProvider>
        <MainRoutes />
    </ChakraProvider>
  );
}

export default App;
