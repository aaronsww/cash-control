import React, { useEffect, useState } from "react";
import useAllowanceStore from "../store/useAllowanceStore";

function DayCard({ no }) {
  const [show, setShow] = useState(true);
  const [showTotal, setShowTotal] = useState(false);
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", expense: 0 });
  const [totalExpense, setTotalExpense] = useState(0);
  const { allowance, limit,  setAllowance } = useAllowanceStore();

  const addEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: "", expense: 0 });
    setShow(true);
    setShowTotal(true);
  };

  useEffect(() => {
    setAllowance(allowance - totalExpense);
  }, [totalExpense]);

  useEffect(() => {
    let total = 0;
    events.forEach((event) => {
      total += event.expense;
    });
    setTotalExpense(total);
  }, [events]);

  return (
    <div className="w-40 m-5">
      <h1>{no}</h1>
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
              setNewEvent({ ...newEvent, expense: parseInt(e.target.value) })
            }
          />
          <button onClick={addEvent}>Add</button>
        </div>
      )}
        {showTotal &&  <h3>Total Expense: {limit + totalExpense}</h3>}
    </div>
  );
}

export default DayCard;
