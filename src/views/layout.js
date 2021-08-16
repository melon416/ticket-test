import React, { useEffect, useState } from "react";
import { fetchTickets } from "./../api";
import SearchBar from "./../components/search";
import SideMenu from "./../components/sideMenu";
import TicketDetail from "./../components/ticketDetail";

function Layout() {
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [ticket, setTicket] = useState(undefined);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchTickets()
      .then(setTickets)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="layout">
      <SearchBar searchText={search} setSearchText={setSearch} />
      <div style={{ display: "flex", flexGrow: "1", overflowY: "auto" }}>
        <SideMenu
          tickets={tickets}
          loading={loading}
          search={search}
          setTicket={setTicket}
          selected={ticket}
        />
        <TicketDetail ticket={ticket} />
      </div>
    </div>
  );
}

export default Layout;
