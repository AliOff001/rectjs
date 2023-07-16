import React from "react";

const Heading = () =>{
  const data = new Date();
  const currentTime = data.getHours();

  let greeting = "";

  const customStyle = {
    color: "",
  };
  
  if (currentTime < 12){
    greeting = "Good morning";
    customStyle.color = "red";
  }else if(currentTime< 18){
    greeting = "Good afternoon";
    customStyle.color = "green";
  }else{
    greeting = "Good nighed";
    customStyle.color = "yellow";
  }
  
       return(
        <h1 className="heading" style={customStyle}>{greeting}</h1>
       );
};
    

export default Heading