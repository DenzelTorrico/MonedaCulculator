import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import ApiService from '../services/ApiService';

function Index(){
    const [data, setData] = useState(null);
  const [money, setMoney] = useState(null);
  const [money2, setMoney2] = useState(null);
  const [cambio, setCambio] = useState(null);
  const [cambio2, setCambio2] = useState(null);
  
  const fetchData = async () => {
    try {
      const response = await ApiService.ConverterMoney()
      setData(response);
    } catch (error) {
      console.log("ERROR AL OBTENER DATA DE LA API", error);
    }
  };

  const fecthData2 = async () => {
        try {
            const response = await ApiService.ChangeMoney(cambio,cambio2,money)
            console.log(response)
        } catch (error) {
            console.log("ERROR AL OBTENER DATA DE LA API", error);

        }
  }
  
  const viewvalue = (event)=>{
    setMoney2(event.target.value)
    console.log(money2)
  }
  const viewConverter = (event)=>{
      setCambio(event.target.value)
  }
  

  useEffect(()=>{
    fetchData()
    console.log()

  },[cambio])

    return(
         
    <div id='content'>
    <Menu/>
    <div id="container">

<h1>Calcular la moneda</h1>
<hr />
<div id="body">
<div id='first'>
{data && (
    <select onChange={viewConverter} className='form-select'>
      {data.supported_codes.map((currency, index) => (
        <option key={index}>
          {currency.map((item, subIndex) => (
            <span key={subIndex}>{item} </span>
          ))}
        </option>
      ))}
    </select>
  )}
    <input type="number" value={money} className='form-control' placeholder='$'/>
</div>
<div id='second'>
{data && (
    <select  className='form-select'>
      {data.supported_codes.map((currency, index) => (
        <option key={index}>
          {currency.map((item, subIndex) => (
            <span key={subIndex}>{item} </span>
          ))}
        </option>
      ))}
    </select>
  )}
    <input type="number" onChange={viewvalue} value={money2} className='form-control' placeholder='$'/>
</div>
</div>
</div>
            <Footer/>
  </div>
    )
}
export default Index