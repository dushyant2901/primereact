import React, { useState } from "react";
import "./styles.css";

var numbe = {
  "11": "Prime",
  "82": "Not Prime",
  "23": "Prime",
  "56": "Not Prime",
  "67": "Prime",
  "98": "Not Prime"
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
      var meaning = "yes";
      setmeaning(meaning);
    } else {
      //var meaning = "no";
      setmeaning("no");
    }
  }

  function knownNumber(numb) {
    setmeaning(numbe[numb]);
    console.log("clicked", numb);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input onChange={changeHandler}></input>
      <div>{meaning}</div>
      {num.map(function (numb) {
        return (
          <span onClick={() => knownNumber(numb)} key={numb}>
            {" "}
            {numb}
          </span>
        );
      })}
    </div>
  );
}
