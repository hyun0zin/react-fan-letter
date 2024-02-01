import DetailPage from "components/DetailPage";
import React from "react";
import styled from "styled-components";
const StDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StDiv = styled.div`
  background-image: url("https://i.pinimg.com/564x/f5/4d/82/f54d828a86423aff30473d263ea9742f.jpg");
  width: 30rem;
  height: 40rem;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
function ROSE() {
  return (
    <StDivContainer>
      <StDiv></StDiv>
      <DetailPage />
    </StDivContainer>
  );
}

export default ROSE;
