import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  color: #f7a7bb;
  font-size: xx-large;
  font-weight: 800;
`;

export const StImg = styled.img`
  width: 30px;
`;

function Header() {
  return (
    <>
      <StHead>
        <Link to="/" style={{ textDecoration: "none" }}>
          <StH1>BLACKPINK</StH1>
        </Link>
        {/* <StImg src="src/assets/logo.png" /> */}
      </StHead>
    </>
  );
}

export default Header;
