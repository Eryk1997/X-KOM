import React, { useState } from "react";
import Send from "./Send";
import "./style/style.css";

const HomePage = () => {
  const [numberOfSets, setNumberOfSets] = useState("");
  const [statusCheckbox,setStatusCheckbox] = useState(false)

  return (
    <div className="justify-content-md-center globalDiv">
      <div className="row">
        <small className="textNumberStyle col-5">Liczba miejsc:</small>
        <input className="col-6 inputHome" type="text" onChange={e => setNumberOfSets(e.target.value)}></input>
      </div>
      <p className="errorInput"></p>

      <p className="mt-3">
        <input className="checkboxStyle float-left" type="checkbox" onChange={e => {setStatusCheckbox(e.target.checked)
        window.localStorage.setItem("statusCheckbox",e.target.checked)
        }} />
        <small className="checkboxTextStyle">
          Czy miejsca mają być obok siebie?
        </small>
      </p>

      <div className="mt-5">
        <button className="col-12 buttonHome btn btn-outline-dark" type="submit" value="Submit" onClick={e => Send(numberOfSets,statusCheckbox)}>
          Wybierz miejsca
        </button>
        
      </div>
    </div>
  );
};

export default HomePage;
