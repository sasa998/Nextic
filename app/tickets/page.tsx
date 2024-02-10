import React, { Suspense } from "react";
import TicketList from "./TicketList";
import Test from "../components/Test";

const page = () => {
  return <div>Tickets
    <Suspense fallback={<div>Loading tickets wait ffs...</div>}>
      <TicketList />
    </Suspense>
  </div>;
};

export default page;
