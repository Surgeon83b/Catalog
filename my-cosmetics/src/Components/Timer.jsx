import React, { useState, useEffect } from 'react'

export default function Timer() {      
  const [seconds, setSeconds] = useState(0);      
  useEffect(() => {          
    const interval = setInterval(() => {              
      setSeconds(seconds => seconds + 1);          
    }, 1000);          
    return () => clearInterval(interval);      
  },[]);      
  return <div>Вы на странице уже {seconds} секунд</div>;  
}
