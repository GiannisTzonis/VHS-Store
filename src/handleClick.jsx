import { createContext, useState } from "react";

const handleClick = () => {
  fetch("https://run.mocky.io/v3/0366a156-69f7-4f44-bb20-e90dd288833b", {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(jsonData),
  });
};

export default handleClick;
