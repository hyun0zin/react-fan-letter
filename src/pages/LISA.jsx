import React from "react";
import styled from "styled-components";
function LISA() {
  const StDiv = styled.div`
    background-image: url("https://i.pinimg.com/564x/0b/88/da/0b88da206ad13b0974b783cb6f6c6bcc.jpg");
    height: 35rem;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `;
  return (
    <>
      <StDiv></StDiv>
      <p>LISA's Letter</p>
    </>
  );
}

export default LISA;
