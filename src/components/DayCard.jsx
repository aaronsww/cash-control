import React, { useState } from "react";

function DayCard({ no, limit }) {
  const [show, setShow] = useState(true);
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", expense: 0 });

  const addEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", expense: 0 });
    setShow(false);
  };

  return (
    <div className="w-40 m-5">
      <h1>{no}</h1>
      <h2>{limit}</h2>
      {events.map((event, index) => (
        <div key={index}>
          <h4>{event.title}</h4>
          <h4>{event.expense}</h4>
        </div>
      ))}
      {show && <button onClick={() => setShow(false)}>Add Event</button>}
      {!show && (
        <div>
          <input
            type="text"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <input
            type="number"
            value={newEvent.expense}
            onChange={(e) =>
              setNewEvent({ ...newEvent, expense: e.target.value })
            }
          />
          <button onClick={addEvent}>Add</button>
        </div>
      )}
    </div>
  );
}

export default DayCard;
