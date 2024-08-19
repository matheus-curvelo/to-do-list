import React from "react";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import "./App.scss";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Common/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Common/Footer";
import theme from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Box component="div" className="content-page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
