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
  background-image: url("https://i.pinimg.com/564x/7d/85/27/7d8527048832709dea1c4c5a04123921.jpg");
  width: 30rem;
  height: 40rem;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
function JISOO({ item }) {
  return (
    <StDivContainer>
      <StDiv></StDiv>
      <DetailPage />
    </StDivContainer>
  );
}

export default JISOO;
