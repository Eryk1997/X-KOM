import "./style/style.css";
import React from "react";
import selectPlace from "./selectPlace";

const Frame = (item) => {

  const positionY = item.cords.y * 6.5;
  const positionX = item.cords.x * 12.5;
  if (item.reserved)
    return (
      <td
        className="itemStyle"
        style={{
          left: positionY + "%",
          top: positionX + "%",
          background: "silver",
        }}
      >
        
      </td>
    );
  return (
    <td
      className={`itemStyle ${item.id}`}
      style={{ left: positionY + "%", top: positionX + "%" }}
      onClick={(e) => selectPlace(item,e)}
    >
    </td>
  );
};

export default Frame;
