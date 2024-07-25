import React, { useState } from 'react'
import './Random_Quote.css'

const Random_Quote = () => {
  let quotes=[];
async function loadQuote(){
  const response = await fetch("	https://api.adviceslip.com/advice");
  quotes=await response.json();
  const {advice}=quotes.slip;
 console.log(advice);
 setQuote(advice)
}

    const [quote,setQuote]= useState({
        advice:"Health is wealth",
      });



  return (
 <div className="continer">
    <div className="Quote">{quote}hello world</div>
    <button onClick={()=> loadQuote()}>Click for Quote</button>
 </div>
        
  )
 
}

export default Random_Quote