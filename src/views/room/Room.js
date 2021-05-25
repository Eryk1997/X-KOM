import React, { useState, useEffect } from "react";
import Seats from "../../service/Seats";
import Frame from "./Frame";
import "./style/style.css";

const Room = () => {
  const [seatsList, setSeatsList] = useState([]);

  useEffect(async () => {
    const response = await Seats.getAllSeats();
    setSeatsList(response.data);
    const statusCheckbox = window.localStorage.getItem("statusCheckbox");
    if(window.localStorage.getItem("statusCheckbox") === "false"){
      await Seats.selectPlaceFalseCheckbox()
    }else{
      await Seats.selectPlaceTrueCheckbox()
    }
  }, []);

  const sendFields = () => {
    window.location.href = "/finish";

  }

  return (
    <div className="RoomGlobalDiv">
      {seatsList.map((item) => Frame(item))}

      <div className="freePlaceDiv"></div>
      <p className="textFreePlace">Miejsca dostępne</p>

      <div className="orderPlaceDiv"></div>
      <p className="textOrderPlace">Miejsca zarezerwowane</p>

      <div className="yourPlaceDiv"></div>
      <p className="textYourPlace">Twój wybór</p>

      <button className="buttonReserve btn btn-outline-dark" onClick={e => sendFields()}>
        Rezerwuj
      </button>
    </div>
  );
};

export default Room;
