import React from "react";
import {Box, Container, Grid} from "@mui/material";
import "./Footer.scss";
import SocialIcons from "../../SocialIcons";
import FooterLinks from "../../FooterLinks";
import FooterColumns from "../../FooterColumns";

const Footer: React.FC = () => {
  return (
    <Box component="footer">
      <Container maxWidth="xl">
        <Grid spacing={3} container className="columns_area">
          <FooterColumns />
        </Grid>
        <Box component="div" className="links_area">
          <SocialIcons />
          <FooterLinks />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
