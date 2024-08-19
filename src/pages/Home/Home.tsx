import React from "react";
import {Container} from "@mui/material";
import "./Home.scss";
import MainBanner from "../../components/MainBanner";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <MainBanner />
      </Container>
    </React.Fragment>
  );
};

export default Home;
