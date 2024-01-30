import React from "react";
import styled from "styled-components";

const StHead = styled.header`
  background-color: black;
  color: white;
  height: 5rem;

  text-align: center;
`;

function Header() {
  return (
    <>
      <StHead>BLACKPINK</StHead>
    </>
  );
}

export default Header;
