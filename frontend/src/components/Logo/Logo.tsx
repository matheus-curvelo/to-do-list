import React from "react";
import {Box} from "@mui/material";
import "./Logo.scss";
import LogoSVG from "../../assets/svgs/logo.svg";
import {Link} from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Box component={Link} to="/" className="logo">
      <img src={LogoSVG} alt="Logo" />
    </Box>
  );
};

export default Logo;
