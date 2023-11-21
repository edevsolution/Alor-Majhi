// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const EventDetails = ({ eventData }) => {
//   const { eventId } = useParams(); // Get the event ID from the URL params
//   const selectedEvent = eventData.find(
//     (event) => event.id === parseInt(eventId)
//   );

//   if (!selectedEvent) {
//     return <div>Event not found</div>; // Display a message if the event is not found
//   }
//   const { id } = useParams();
//   const [eventData, setEventData] = useState(null);

//   useEffect(() => {
//     fetch("team.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setEventData(data);
//       });
//   }, []);

//   return (
//     <div className="mt-5 p-5 border border-gray-300">
//       <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
//       <p className="text-gray-400 py-3">{selectedEvent.description}</p>
//       {/* Add other details */}
//     </div>
//   );
// };

// export default EventDetails;
import React from "react";

const EventDetails = () => {
  return <div></div>;
};

export default EventDetails;
