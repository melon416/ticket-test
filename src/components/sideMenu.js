import React from "react";
import SideMenuItem from "./sideMenuItem";

function SideMenu({ loading, tickets, setTicket, selected, search }) {
  return (
    <div
      className="side-menu"
      style={{ justifyContent: loading ? "center" : "flex-start" }}
    >
      {loading && (
        <div className="lds-ripple" style={{ alignSelf: "center" }}>
          <div></div>
          <div></div>
        </div>
      )}
      {!loading &&
        tickets
          .filter((ticket) => {
            if (search.length === 0) return true;
            if (ticket.name.toLowerCase().includes(search.toLowerCase()))
              return true;
            if (ticket.location.toLowerCase().includes(search.toLowerCase()))
              return true;
            return false;
          })
          .map((ticket) => (
            <SideMenuItem
              ticket={ticket}
              key={ticket.id}
              setTicket={setTicket}
              selected={selected && selected.id === ticket.id}
            />
          ))}
    </div>
  );
}

export default SideMenu;
