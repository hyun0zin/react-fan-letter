import React from "react";
import styled from "styled-components";
import Header from "components/Header";
import MemberSelect from "components/MemberSelect";
import WriteLetter from "components/WriteLetter";
import LetterList from "components/LetterList";
import Letter from "components/Letter";
import Footer from "components/Footer";

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 20px;
`;

function App() {
  return (
    <>
      <StBox>App</StBox>
      <Header />
      <MemberSelect />
      <WriteLetter />
      <LetterList />
      <Letter />
      <Footer />
    </>
  );
}

export default App;
