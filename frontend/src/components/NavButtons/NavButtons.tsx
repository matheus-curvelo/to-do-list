import React from "react";
import {Button, useMediaQuery, useTheme} from "@mui/material";
import "./NavButtons.scss";
import {Link} from "react-router-dom";

const LOGIN_TEXT = "Login";
const REGISTER_TEXT = "Cadastre-se";

const NavButtons: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <Button component={Link} to="/login" color="inherit" variant="text">
        {LOGIN_TEXT}
      </Button>
      <Button
        component={Link}
        to="/register"
        color={isMobile ? "inherit" : "secondary"}
        variant={isMobile ? "text" : "contained"}>
        {REGISTER_TEXT}
      </Button>
    </React.Fragment>
  );
};

export default NavButtons;
