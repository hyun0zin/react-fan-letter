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

const StImg = styled.img`
  /* background-color: white; */
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

function LetterItem({ item }) {
  const { avatar, content, createdAt, id, nickname, writedTo } = item;

  const rawData = item.createdAt;
  const formattedData = new Date(rawData).toLocaleDateString("ko-KR", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  // console.log(formattedData);

  return (
    <StMainContainer>
      <StMain>
        <StImgContainer>
          <StImg src={avatar} alt="프로필 사진" />
        </StImgContainer>
        <StDiv style={{ flexDirection: "column", width: "500px" }}>
          <StDiv style={{ justifyContent: "space-evenly" }}>
            <StSpan>{nickname}</StSpan>
            <StSpan>{formattedData}</StSpan>
          </StDiv>
          <StDiv>
            <StP>{content}</StP>
          </StDiv>
        </StDiv>
      </StMain>
    </StMainContainer>
  );
}

export default LetterItem;
