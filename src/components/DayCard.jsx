import React, { useEffect, useState } from "react";
import useAllowanceStore from "../store/useAllowanceStore";

function DayCard({ no, toggle }) {
  const [show, setShow] = useState(true);
  const [showTotal, setShowTotal] = useState(false);
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: "", expense: 0 });
  const [totalExpense, setTotalExpense] = useState(0);
  const { allowance, limit, setAllowance } = useAllowanceStore();

  const addEvent = () => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
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
    <div>
      {toggle && (
        <div
          className={`bg-${events.length > 0 ? "blue-200" : "white"} rounded-lg shadow-lg p-4 m-5`}
        >
          <h1 className="text-2xl font-bold ml-3 mb-2 text-start">{no}</h1>
          {events.map((event, index) => (
            <div key={index} className="flex justify-start items-center mb-2">
              <h4>{event.title}</h4>
              <div className="flex-grow bg-gray-300 mx-2 border-dotted border-b"></div>
              <h4>₹{event.expense}</h4>
            </div>
          ))}
          {show && (
            <button
              className="bg-slate-500 hover:bg-slate-600 text-white py-2 px-16 rounded mt-2"
              onClick={() => setShow(false)}
            >
              Add Event
            </button>
          )}
          {!show && (
            <div className="flex flex-col">
              <input
                type="text"
                value={newEvent.title}
                placeholder="Title"
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                className="border border-gray-400 rounded p-1 mb-2"
              />
              <input
                type="number"
                value={newEvent.expense}
                placeholder="Expense"
                onChange={(e) =>
                  setNewEvent({
                    ...newEvent,
                    expense: parseInt(e.target.value),
                  })
                }
                className="border border-gray-400 rounded p-1 mb-2"
              />
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-1 rounded"
                onClick={addEvent}
              >
                Add
              </button>
            </div>
          )}
          {showTotal && (
            <h3 className="text-lg font-semibold mt-4">
              Total Expense: ₹{limit + totalExpense}
            </h3>
          )}
        </div>
      )}
      {!toggle && (
        <div className="rounded-lg shadow-xl flex flex-col items-center justify-center m-2 h-14 w-14 font-extrabold">
          {no}
          {events.length > 0 && <div className="bg-red-500 w-2 h-2 rounded-full"></div>}
        </div>
      )}
    </div>
  );
}

export default DayCard;
