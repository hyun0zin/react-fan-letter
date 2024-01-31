import React from "react";
import styled from "styled-components";

const StMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StMain = styled.main`
  background-color: black;
  width: 650px;
  height: 200px;
  padding: 20px;

  margin: 20px;
  border-radius: 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
`;

const StSpan = styled.span`
  color: white;
  font-size: larger;
  font-weight: 800;
`;

const StP = styled.p`
  border: 1px solid white;
  background-color: white;
  border-radius: 10px;
  width: 500px;
  height: 130px;
`;

const StDiv = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;

const StImgContainer = styled.div`
  justify-content: flex-start;
  width: 100px;
`;

const StImg = styled.p`
  background-color: white;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

function LetterItem() {
  return (
    <StMainContainer>
      <StMain>
        <StImgContainer>
          <StImg
            src="https://i.namu.wiki/i/enCUBDXgjFR3bLBFx9M3hpGtEq1AYjNPU75fDxYtkEHPoZG1MTORb7haPMG0lZKHMQpHF7CFm3K8krWZTTA5zw.webp"
            alt="프로필 사진"
          />
        </StImgContainer>
        <StDiv style={{ flexDirection: "column", width: "500px" }}>
          <StDiv style={{ justifyContent: "space-evenly" }}>
            <StSpan>닉네임</StSpan>
            <StSpan>작성 날짜 / 작성 시간</StSpan>
          </StDiv>
          <StDiv>
            <StP>내용이 나타나는 칸 입니다.</StP>
          </StDiv>
        </StDiv>
      </StMain>
    </StMainContainer>
  );
}

export default LetterItem;
