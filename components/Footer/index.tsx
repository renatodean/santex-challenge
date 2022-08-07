import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.header`
  background-color: white;
  text-align: center;
  height: 40px;
  padding: 10px 20px;
  margin-top: 10px;
  box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.1);
`;

const Footer = () => (
  <FooterContainer>Santex Challenge - Ecommerce</FooterContainer>
);

export default Footer;
