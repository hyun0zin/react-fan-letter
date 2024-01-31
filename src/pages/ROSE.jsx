import React from "react";
import styled from "styled-components";

function ROSE() {
  const StDiv = styled.div`
    background-image: url("https://i.pinimg.com/564x/f5/4d/82/f54d828a86423aff30473d263ea9742f.jpg");
    height: 35rem;

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  `;
  return (
    <>
      <StDiv></StDiv>
      <p>ROSE's Letter</p>
    </>
  );
}

export default ROSE;
