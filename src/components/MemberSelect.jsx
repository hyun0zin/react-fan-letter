import React from "react";
import styled from "styled-components";

const Stdiv = styled.div`
  background-image: url("https://i.namu.wiki/i/YuMgn9KKCnJMgc_KAWb3hiBNPbzxIDctMpP9MOg7QvUHWPttKBRECoT-PzfmibDaGshdNHJy3TGN744mvwOyp1PQ6jRI-5xJ9N80ju0eg0CbbI9s646fY-uCfHY-lblWLKEaoLcZbAxT71gr4db8wg.webp");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 30rem;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 2rem;
`;
const StNav = styled.nav`
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 1rem;
`;

const StBtn = styled.button`
  width: 7rem;
  height: 3.5rem;
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

function MemberSelect() {
  const memberBtnClickHandler = () => {
    alert("hi");
  };
  return (
    <>
      <Stdiv>
        <StNav>
          <StBtn onClick={memberBtnClickHandler}>JENNIE</StBtn>
          <StBtn onClick={memberBtnClickHandler}>JISOO</StBtn>
          <StBtn onClick={memberBtnClickHandler}>ROSÉ</StBtn>
          <StBtn onClick={memberBtnClickHandler}>LISA</StBtn>
        </StNav>
      </Stdiv>
    </>
  );
}

export default MemberSelect;
