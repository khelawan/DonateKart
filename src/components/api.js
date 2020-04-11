import React, { useState,useEffect } from "react";
import Cards from './card'
import { Card } from "react-bootstrap";

function MyComponent(props) {
  console.log(props.currency)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
      fetch("https://api.exchangeratesapi.io/latest?base=USD")
        .then(res => res.json())
        .then(
          (result) => {
             
            const  _inrRate = result.rates.INR;
            localStorage.setItem("USD", _inrRate);
            setIsLoaded(true);
           
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (<div>
      <img src="https://firebasestorage.googleapis.com/v0/b/konfhub.appspot.com/o/'%2Fconference-photos%2F'30.gif?alt=media&token=a7f56eff-1f4f-4783-95d3-69925b8a678c" alt="Loading" height="15" width="100"/>
      </div>);
    } else {
      return (
        <ul>
        <Cards currency={props.currency}/>
        </ul>
      );
    }
  }
  export default MyComponent;