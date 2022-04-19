import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { MainRoutes } from "./Routes/MainRoutes";

function App() {
  return (
    <ChakraProvider>
        <MainRoutes />
    </ChakraProvider>
  );
}

export default App;
