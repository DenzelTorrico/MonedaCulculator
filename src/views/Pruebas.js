import React from "react";
import { useState,useEffect } from "react";
function Pruebas() {
  console.log(process.env.REACT_APP_API_URL);
  console.log(process.env.REACT_APP_API_CONVERTER);

  const [data,setData] = useState("Saludos")
  
  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

export default Pruebas;
