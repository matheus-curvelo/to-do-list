import React from "react";
import {Box, Button} from "@mui/material";
import "./FooterLinks.scss";

const FooterLinks: React.FC = () => {
  const items = ["Segurança", "Privacidade", "Termos", "Copyright"];

  return (
    <Box component="div" className="footer_links">
      {items.map((item, index) => (
        <Button key={index} color="inherit" variant="text" disabled>
          {item}
        </Button>
      ))}
    </Box>
  );
};

export default FooterLinks;
