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
  height: 330px;
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
`;

const StDiv = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;

const StSelect = styled.select`
  width: 150px;
  border-radius: 10px;
  background-color: white;
  text-align: center;
  font-weight: 600;
`;

const StBtn = styled.button`
  width: 10rem;
  height: 3rem;
  border-color: transparent;
  border-radius: 10px;
  background-color: #f7a7bb;
  font-weight: 600;
  font-size: medium;
  color: black;
  box-shadow: 0px 0px 20px black;

  &:hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
`;
function WriteLetter() {
  return (
    <StMainContainer>
      <StMain>
        <StDiv>
          <StSpan>닉네임</StSpan>
          <StInput style={{ width: "300px", height: "30px" }} />
          <StSelect>
            <option>JENNIE</option>
            <option>JISOO</option>
            <option>ROSÉ</option>
            <option>LISA</option>
          </StSelect>
        </StDiv>
        <StDiv>
          <StSpan>내용</StSpan>
          <StInput style={{ width: "500px", height: "200px" }} />
        </StDiv>
        <StDiv>
          <StBtn style={{ justifyContent: "flex-end" }}>팬레터 등록하기</StBtn>
        </StDiv>
      </StMain>
    </StMainContainer>
  );
}

export default WriteLetter;
