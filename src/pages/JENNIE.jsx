import DetailPage from "components/DetailPage";
import React, { useEffect } from "react";
import styled from "styled-components";
const StDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StDiv = styled.div`
  background-image: url("https://i.pinimg.com/736x/9a/1c/b8/9a1cb83f3c42b75b55caffd76c9b5b96.jpg");
  width: 30rem;
  height: 40rem;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
function JENNIE({ item }) {
  return (
    <StDivContainer>
      <StDiv></StDiv>
      <DetailPage />
    </StDivContainer>
  );
}

export default JENNIE;
