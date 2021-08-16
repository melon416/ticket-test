import React from "react";

function SideMenuItem({ ticket, setTicket, selected }) {
  return (
    <div
      className={`side-item ${selected ? "selected" : ""}`}
      onClick={() => setTicket(ticket)}
    >
      <div className="image">
        <img src={ticket.image} height="30" alt="ticket.name" />
      </div>
      <div className="title">{ticket.name}</div>
    </div>
  );
}

export default SideMenuItem;
