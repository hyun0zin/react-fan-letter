import DetailPage from "components/DetailPage";
import React from "react";
import styled from "styled-components";
import fakeData from "assets/json/fakeData";
import { useParams } from "react-router-dom";

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
function LISA({ letters }) {
  const params = useParams();

  //find
  const foundData = letters.find((item) => {
    return item.id === params.id;
  });
  return (
    <StDivContainer>
      <StDiv></StDiv>
      <DetailPage foundData={foundData} />
    </StDivContainer>
  );
}

export default LISA;
