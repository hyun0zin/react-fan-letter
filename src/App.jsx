import React from "react";
import GlobalStyle from "GlobalStyle";
import Router from "shared/Router";
import Layout from "components/layout/Layout";
import LetterList from "components/letters/LetterList";
import Letter from "components/letters/LetterItem";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
