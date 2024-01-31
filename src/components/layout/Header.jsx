import React from "react";
import styled from "styled-components";
import logo from "assets/logo.png";

const StHead = styled.header`
  background-color: black;

  height: 5rem;

  /* position: sticky;
  top: 0; */

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StH1 = styled.h1`
  color: var(--color-blackpink);
  font-size: xx-large;
  font-weight: 800;
`;

export const StImg = styled.img`
  background-image: url(${logo});
`;

function Header() {
  return (
    <>
      <StHead>
        <StH1>BLACKPINK</StH1>
        <StImg src="src/assets/logo.png" />
      </StHead>
    </>
  );
}

export default Header;
