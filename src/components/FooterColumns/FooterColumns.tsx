import React from "react";
import {Box, Typography, IconButton, Grid, Link} from "@mui/material";
import "./FooterColumns.scss";
import LogoSVG from "../../assets/svgs/logo.svg";

const FooterColumns: React.FC = () => {
  const slogan =
    "Junte-se a milhões de pessoas que organizam trabalho e vida pessoal.";

  const colunas = [
    {
      title: "Ferramentas",
      links: [
        {text: "Como Funciona", href: ""},
        {text: "Para equipes", href: ""},
        {text: "Faça o upgrade agora", href: ""},
        {text: "Modelos", href: ""},
      ],
    },
    {
      title: "Recursos",
      links: [
        {text: "Baixe os Apps", href: ""},
        {text: "Central de Ajuda", href: ""},
        {text: "Métodos de produtividade", href: ""},
        {text: "Integrações", href: ""},
        {text: "Parceiros de Canal", href: ""},
        {text: "Desenvolvedor API", href: ""},
        {text: "Status", href: ""},
      ],
    },
    {
      title: "Empresa",
      links: [
        {text: "Sobre nós", href: ""},
        {text: "Carreiras", href: ""},
        {text: "Central de inspiração", href: ""},
        {text: "Imprensa", href: ""},
        {text: "Twist", href: ""},
      ],
    },
  ];

  return (
    <React.Fragment>
      <Grid item xs={12} md={3} lg={6} className="column">
        <Box component="div" className="footer_slogan_container">
          <img src={LogoSVG} className="footer_logo" alt="Logo" />
          <Typography className="footer_slogan" component="p">
            {slogan}
          </Typography>
        </Box>
      </Grid>

      {colunas.map((coluna, index) => (
        <Grid key={index} item xs={12} md={3} lg={2} className="column">
          <Typography className="column_title" variant="h5">
            {coluna.title}
          </Typography>
          <Box className="column_links" component="div">
            {coluna.links.map((link, linkIndex) => (
              <Link key={linkIndex} href={link.href} color="inherit">
                {link.text}
              </Link>
            ))}
          </Box>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default FooterColumns;
