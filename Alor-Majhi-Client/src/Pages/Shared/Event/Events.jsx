import React, { useEffect, useState } from "react";
import { FaRegClock, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Events = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <div>
      {teams.map((event, index) => (
        <div key={index} className="hero bg-base-200 lg:m-10 py-5 lg:py-0">
          <div className="hero-content flex-col lg:flex-row gap-8">
            <div className="relative">
              <img
                src={event.imageUrl}
                className="max-w-sm rounded-lg shadow-2xl"
              />

              <div className="absolute top-0">
                <div className="bg-red-500 p-3">
                  <h2 className="text-white text-xl font-bold">{event.date}</h2>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-2xl font-bold">{event.title}</h1>
              <div className="text-gray-400 flex items-center gap-6 py-3">
                <h4 className="text-gray-400 flex items-center gap-2">
                  <FaRegClock />
                  {event.time}
                </h4>
                <h4 className="text-gray-400 flex items-center gap-2">
                  <FaLocationDot />
                  {event.location}
                </h4>
              </div>
              <p className="py-2 text-gray-400 w-2/3">{event.description}</p>
              <Link
                to={`/eventDetails/${event.id}`}
                className="py-3 text-red-500 font-bold hover:bg-red-500 hover:text-white hover:p-2 hover:rounded-lg"
              >
                View Details <span className="text-sm"> &gt; </span>{" "}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
