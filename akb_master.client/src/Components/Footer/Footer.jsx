import React, { useState } from "react";

// NPM
import { useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

//Styles Main
import { FooterStyle,FooterText, } from "./Footer.style";

const Footer = () => {
  const isLargeDesktop = useMediaQuery((theme) => theme.breakpoints.up("xl"));
  const isDesktop = useMediaQuery((theme) =>
    theme.breakpoints.between("lg", "xl")
  );
  const isNotebook = useMediaQuery((theme) =>
    theme.breakpoints.between("md", "lg")
  );
  const isTablet = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <FooterStyle>
      <FooterText>© АКБ-МАСТЕР</FooterText>
      <Link to="/privacy">
        <FooterText>Политика конфиденциальности</FooterText>
      </Link>
    </FooterStyle>
  );
};
export default Footer;
// Desktop={isDesktop} Notebook={isNotebook} Tablet={isTablet} Mobile={isMobile}
