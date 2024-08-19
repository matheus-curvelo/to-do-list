import React from "react";
import { Box, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import "./SocialIcons.scss";

const SocialIcons: React.FC = () => {
  const items = [
    { component: <Facebook />, label: "Facebook" },
    { component: <YouTube />, label: "YouTube" },
    { component: <Twitter />, label: "Twitter" },
    { component: <Instagram />, label: "Instagram" }
  ];

  return (
    <Box component="div" className="social_icons">
      {items.map((item, index) => (
        <IconButton key={index} aria-label={item.label} className="social_icon" disabled>
          {item.component}
        </IconButton>
      ))}
    </Box>
  );
};

export default SocialIcons;
