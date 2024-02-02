import React, { useEffect } from "react";
import styled from "styled-components";

const StMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StMain = styled.main`
  background-color: black;
  width: 500px;
  height: 500px;
  padding: 20px;

  margin: 20px;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StTopP = styled.p`
  background-color: #f7a7bb;
  color: white;
  border-radius: 10px;
  width: 300px;
  height: 50px;
  font-size: larger;
  font-weight: 800;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StSpan = styled.span`
  color: white;
  font-size: larger;
  font-weight: 800;
`;

const StP = styled.p`
  background-color: white;
  border-radius: 10px;
  width: 500px;
  height: 250px;
`;

const StDiv = styled.div`
  padding: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StImg = styled.img`
  /* background-color: white; */
  border-radius: 50%;
  width: 75px;
  height: 75px;
`;

const StBtn = styled.button`
  width: 8rem;
  height: 3.5rem;
  border-color: transparent;
  border-radius: 10px;
  background-color: #f7a7bb;
  font-weight: 800;
  font-size: large;
  color: white;
  box-shadow: 0px 0px 20px black;

  &:hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
`;
function DetailPage({ foundData }) {
  const { writedTo, avatar, nickname, formattedData, content } = foundData;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StMainContainer>
        <StMain>
          <StTopP>To.{writedTo}</StTopP>
          <StDiv
            style={{ flexDirection: "row", width: "500px", height: "50px" }}
          >
            <StImg src={avatar} alt="프로필 사진" />
            <StSpan>{nickname}</StSpan>
            <StSpan>{formattedData}</StSpan>
          </StDiv>
          <StDiv>
            <StP>{content}</StP>
          </StDiv>
          <StDiv style={{ gap: "2rem" }}>
            <StBtn>수정하기</StBtn>
            <StBtn>삭제하기</StBtn>
          </StDiv>
        </StMain>
      </StMainContainer>
    </>
  );
}

export default DetailPage;
