import React from "react";

function DayCard({ no, limit }) {
  return (
    <div>
      <h1>{no}</h1>
      <h2>{limit}</h2>
    </div>
  );
}

export default DayCard;
