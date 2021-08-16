import React from "react";

function TicketDetail({ ticket }) {
  return (
    <div className="ticket-detail">
      {ticket && (
        <>
          <div className="name">
            <p> {ticket.name} </p>
          </div>
          <div className="image">
            <img src={ticket.image} alt={ticket.name} width="100%" />
          </div>
          <p>Start Date: {ticket.start_date}</p>
          <p>Location: {ticket.location}</p>
          <div className="actions">
            <input className="btn btn-buy" type="button" value="Buy" />
            <input className="btn btn-sell" type="button" value="Sell" />
          </div>
        </>
      )}
    </div>
  );
}

export default TicketDetail;
