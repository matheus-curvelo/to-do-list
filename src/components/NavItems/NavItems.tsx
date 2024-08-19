import React from "react";
import { Box, Button } from "@mui/material";
import "./NavItems.scss";

const NavItems: React.FC = () => {
  const items = ["Ferramentas", "Para equipes", "Recursos", "Preço"];

  return (
    <Box component="div" className="nav_items">
      {items.map((item, index) => (
        <Button key={index} color="inherit" variant="text" disabled>
          {item}
        </Button>
      ))}
    </Box>
  );
};

export default NavItems;
