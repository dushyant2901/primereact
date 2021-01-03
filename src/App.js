import React, { useState } from "react";
import "./styles.css";

var numbe = {
  "11": "Prime",
  "82": "Not Prime",
  "23": "Prime",
  "56": "Not Prime",
  "67": "Prime",
  "98": "Not Prime",
  "19": "Prime",
  "4": "Not Prime",
  "53": "Prime",
  "86": "Not Prime",
  "61": "Prime",
  "88": "Not Prime"
};
var num = Object.keys(numbe);

export default function App() {
  var [meaning, setmeaning] = useState("");
  function changeHandler(event) {
    var userInput = event.target.value;
    var prime = true;
    if (userInput / 1 === 1) {
      prime = false;
    } else {
      for (var i = 2; i < userInput; i++) {
        if (userInput % i === 0) {
          prime = false;
        }
      }
    }
    var newprime = prime;
    if (newprime === true) {
      var meaning = "This is a Prime Number";
      setmeaning(meaning);
    } else {
      //var meaning = "no";
      setmeaning("This is not a Prime Number");
    }
  }

  function knownNumber(numb) {
    setmeaning(numbe[numb]);
  }

  return (
    <div className="App">
      
      <h2 style={{color:"purple",fontWeight:"bold"}}>Prime Number Check</h2>
      <h3 style={{color:"violet",}}>Type the number here to check</h3>
      <div> 👇</div>
      <input style={{color:"orange",borderRadius:"0.5rem",backgroundColor:"beige",margin:"0.7rem",width:"30%",height:"5vh",padding:"0.5rem",fontSize:"1.1rem"}} onChange={changeHandler}></input>
      <div style={{
          fontStyle: "italic",
          fotWeight: "bold",
          color: "darkgreen",
          fontSize: "1.2rem",
          padding: "0.5rem"}}>{meaning}</div>
       <h3 style={{color:"brown"}}>Random Numbers</h3>
      {num.map(function (numb) {
        return (
         
          <span onClick={()=> knownNumber(numb)} style={{color:"navyblue",margin:"1rem",padding:"1rem"}} key={numb} >
            {" "}
            {numb}
          </span>
        );
      })}
    </div>
  );
}
