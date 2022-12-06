import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeContextProvider from "./Theme/ThemeContextProvider";
import { ChakraProvider } from "@chakra-ui/react";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeContextProvider>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </ThemeContextProvider>
);
