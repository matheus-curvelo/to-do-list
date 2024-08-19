import React from "react";
import {Box, Typography} from "@mui/material";
import "./MainBanner.scss";

const MainBanner: React.FC = () => {
  const mainBannerTitle = "Finalmente organize seu trabalho e sua vida.";

  const mainBannerSubTitle =
    "Simplifique a sua vida e a da sua equipe. O gerenciador de tarefas e aplicativo de to-do list nº 1.";

  const mainBannerImage = "https://placehold.co/1280x720";

  return (
    <Box component="div" className="main_banner">
      <Typography component="div" className="main_banner__title">
        {mainBannerTitle}
      </Typography>
      <Typography component="span" className="main_banner__subtitle">
        {mainBannerSubTitle}
      </Typography>
      <Box component="img" className="main_banner__image" alt="Main Banner Image" src={mainBannerImage} />
    </Box>
  );
};

export default MainBanner;
