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
`;

const StSpan = styled.span`
  color: white;
  font-size: larger;
  font-weight: 800;
`;

const StInput = styled.input`
  border-color: transparent;
  border-radius: 10px;
  width: 500px;
  height: 130px;
`;

const StDiv = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;

const StImg = styled.p`
  background-color: white;
  border-radius: 50%;
  width: 70px;
  height: 70px;
`;

function Letter() {
  return (
    <StMainContainer>
      <StMain>
        <StDiv style={{ justifyContent: "space-evenly" }}>
          {/* <StImg
            src="https://i.namu.wiki/i/enCUBDXgjFR3bLBFx9M3hpGtEq1AYjNPU75fDxYtkEHPoZG1MTORb7haPMG0lZKHMQpHF7CFm3K8krWZTTA5zw.webp"
            alt=""
          /> */}
          <StSpan>닉네임</StSpan>
          <StSpan>작성 날짜 / 작성 시간</StSpan>
        </StDiv>
        <StDiv>
          <StInput />
        </StDiv>
      </StMain>
    </StMainContainer>
  );
}

export default Letter;
