import React, { useEffect, useState } from "react";
import Nav from "./layout/Nav";
import LetterForm from "./letters/LetterForm";
import LetterList from "./letters/LetterList";

function MainPage({ letters, setLetters }) {
  const [writedTo, setWritedTo] = useState("");

  // 카드 추가하기
  const addLetterSubmit = (newLetter) => {
    setLetters((letters) => [newLetter, ...letters]);
  };

  console.log(letters);

  // 멤버 이름 누르면 해당 카드만 filtering 되어 뜨게 하기
  const memberBtnClickHandler = (writedTo) => {
    setWritedTo(writedTo);
  };

  return (
    <>
      <Nav letters={letters} memberBtnClickHandler={memberBtnClickHandler} />
      <LetterForm addLetterSubmit={addLetterSubmit} />
      <LetterList letters={letters} writedTo={writedTo} />
    </>
  );
}

export default MainPage;
