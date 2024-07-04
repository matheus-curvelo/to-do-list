import React, {useState} from "react";
import {AppBar, Toolbar, Container, Box, IconButton} from "@mui/material";
import "./Header.scss";
import Logo from "../../Logo";
import NavItems from "../../NavItems";
import NavButtons from "../../NavButtons";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerMenu from "../../DrawerMenu";

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar color="default" position="static">
      <Container maxWidth="xl">
        <Toolbar className="toolbar">
          <Logo />
          <Box className="toolbar__buttons">
            <NavItems />
            <span className="toolbar__divider"></span>
            <NavButtons />
          </Box>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            className="menu_button"
            onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <DrawerMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </AppBar>
  );
};

export default Header;
