import Letter from "components/letters/LetterItem";
import React from "react";
import styled from "styled-components";

function JISOO() {
  const StDiv = styled.div`
    background-image: url("https://i.pinimg.com/564x/7d/85/27/7d8527048832709dea1c4c5a04123921.jpg");
    height: 35rem;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `;
  return (
    <>
      <StDiv></StDiv>
      <p>JISOO's Letter</p>
    </>
  );
}

export default JISOO;
