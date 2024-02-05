import DetailPage from "components/DetailPage";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import fakeData from "assets/json/fakeData";

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
function JISOO({ letters, removeBtn, updateBtn, updatedLetters }) {
  const params = useParams();

  //find
  const foundData = letters.find((item) => {
    return item.id === params.id;
  });
  return (
    <StDivContainer>
      <StDiv></StDiv>
      <DetailPage
        letters={letters}
        foundData={foundData}
        removeBtn={removeBtn}
        updateBtn={updateBtn}
        updatedLetters={updatedLetters}
      />
    </StDivContainer>
  );
}

export default JISOO;
