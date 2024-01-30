import React from "react";
import styled from "styled-components";

const StFooter = styled.footer`
  background-color: black;
  color: white;
  height: 5rem;

  position: sticky;
  bottom: 0;
`;
function Footer() {
  return <StFooter>footer 부분입니다</StFooter>;
}

export default Footer;
