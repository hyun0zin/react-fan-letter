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
  background-image: url("https://i.pinimg.com/564x/0b/88/da/0b88da206ad13b0974b783cb6f6c6bcc.jpg");
  width: 35rem;
  height: 40rem;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
function LISA() {
  return (
    <StDivContainer>
      <StDiv></StDiv>
      <DetailPage />
    </StDivContainer>
  );
}

export default LISA;
