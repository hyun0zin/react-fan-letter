import React from "react";
import GlobalStyle from "GlobalStyle";
import Router from "shared/Router";
import Layout from "components/Layout";
import LetterList from "components/LetterList";
import Letter from "components/Letter";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
