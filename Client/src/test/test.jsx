import React, { useState } from "react";


function Test() {

const MYvars = process.env.REACT_APP_API_URL;
console.log(MYvars);
  return (
    <>
    <h1>TESTING LAB</h1>
    <h3>{MYvars}</h3>;
    </>

  );
}
export default Test;