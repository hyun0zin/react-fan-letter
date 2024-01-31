import React, { useEffect, useState } from "react";
import Nav from "./layout/Nav";
import LetterForm from "./letters/LetterForm";
import LetterList from "./letters/LetterList";
import fakeData from "../../src/assets/json/fakeData.json";

function MainPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...fakeData]);
    // return console.log(data);
  }, []);

  const memberBtnClickHandler = () => {
    alert("안녕");
  };
  return (
    <>
      <Nav data={data} memberBtnClickHandler={memberBtnClickHandler} />
      <LetterForm />
      <LetterList data={data} />
    </>
  );
}

export default MainPage;
