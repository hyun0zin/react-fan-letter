import React from "react";
import styled from "styled-components";

const StHead = styled.header`
  background-color: black;

  height: 5rem;

  position: sticky;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StH1 = styled.h1`
  color: #f7a7bb;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return (
    <>
      <StHead>
        <StH1>BLACKPINK</StH1>
      </StHead>
    </>
  );
}

export default Header;
