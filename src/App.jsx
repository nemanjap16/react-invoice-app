import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Invoices from "./pages/Invoices";
import { InvoiceReducerProvider } from "./context/invReducerContext.jsx";
import { ThemeProvider } from "styled-components";
import { theme, colors } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import LeftBar from "./components/LeftBar";

const { dark, light } = theme;

function App() {
  const [currentTheme, setCurrentTheme] = useState(light);
  useEffect(() => {
    let invTheme = window.localStorage.getItem("invoice-theme");

    if (JSON.parse(invTheme) == "dark") {
      setCurrentTheme(dark);
    }
    if (JSON.parse(invTheme) == "light") {
      setCurrentTheme(light);
    }
  }, [currentTheme]);

  return (
    <>
      <InvoiceReducerProvider>
        <ThemeProvider
          theme={{ currentTheme, colors, setCurrentTheme, dark, light }}
        >
          <GlobalStyles />
          <LeftBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/invoices/:id" element={<Invoices />} />
          </Routes>
        </ThemeProvider>
      </InvoiceReducerProvider>
    </>
  );
}

export default App;
