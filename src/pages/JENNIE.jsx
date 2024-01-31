import Letter from "components/letters/LetterItem";
import React from "react";
import styled from "styled-components";
function JENNIE() {
  const StDiv = styled.div`
    background-image: url("https://i.pinimg.com/736x/9a/1c/b8/9a1cb83f3c42b75b55caffd76c9b5b96.jpg");
    height: 35rem;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `;
  return (
    <>
      <StDiv></StDiv>
      <p>JENNIE's Letter</p>
    </>
  );
}

export default JENNIE;
