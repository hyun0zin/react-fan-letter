import React from "react";
import Header from "./layout/Header";
import MemberSelect from "./layout/MemberSelect";
import WriteLetter from "./layout/WriteLetter";
import Footer from "./layout/Footer";
import LetterList from "./LetterList";
import Letter from "./Letter";

function Layout() {
  return (
    <>
      <Header />
      <MemberSelect />
      <WriteLetter />
      <LetterList />
      <Letter />
      <Footer />
    </>
  );
}

export default Layout;
