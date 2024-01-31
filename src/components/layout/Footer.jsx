import React from "react";
import styled from "styled-components";
import youtubeLogo from "../../assets/images/youtubeLogo.png";

const StFooter = styled.footer`
  background-color: black;
  color: white;
  height: 5rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  /* position: sticky;
  bottom: 0; */
`;
const StImgLink = styled.a`
  display: block;
`;
const StImgYoutube = styled.img.attrs({
  src: youtubeLogo,
  alt: "유튜브 로고",
})`
  height: 25px;
  cursor: pointer;
`;
function Footer() {
  return (
    <>
      <StFooter>
        <StImgLink href="http://www.youtube.com/@BLACKPINK">
          <StImgYoutube />
        </StImgLink>
      </StFooter>
    </>
  );
}

export default Footer;
