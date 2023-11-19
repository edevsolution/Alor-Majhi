import React from "react";
import { FaRegClock, FaLocationDot } from "react-icons/fa6";

const Events = () => {
  const eventData = [
    {
      date: "31 JAN",
      title: "Insure Clean Water To Africa",
      time: "8:00 am-5:00 pm",
      location: "Nimtola, Chattogram",
      description:
        "Lorem ipsum dolor sit amet, quo odio atqui tamquam eu, duo ex amet elitr. Ne essent feugiat vim, et soluta reprimique instructior mel. Munere tamquam referrentur ad duo, ei",
      imageUrl:
        "http://www.c.commonsupport.com/huminity/wp-content/uploads/2017/08/event-3.jpg",
    },
    {
      date: "30 SEP",
      title: "Insure Clean Water To Africa",
      time: "8:00 am-5:00 pm",
      location: "Nimtola, Chattogram",
      description:
        "Lorem ipsum dolor sit amet, quo odio atqui tamquam eu, duo ex amet elitr. Ne essent feugiat vim, et soluta reprimique instructior mel. Munere tamquam referrentur ad duo, ei",
      imageUrl:
        "http://www.c.commonsupport.com/huminity/wp-content/uploads/2017/08/event-6.jpg",
    },
    {
      date: "31 DEC",
      title: "Insure Clean Water To Africa",
      time: "8:00 am-5:00 pm",
      location: "Nimtola, Chattogram",
      description:
        "Lorem ipsum dolor sit amet, quo odio atqui tamquam eu, duo ex amet elitr. Ne essent feugiat vim, et soluta reprimique instructior mel. Munere tamquam referrentur ad duo, ei",
      imageUrl:
        "http://www.c.commonsupport.com/huminity/wp-content/uploads/2017/08/event-3.jpg",
    },
    // Add more event data objects as needed
  ];

  return (
    <div>
      {eventData.map((event, index) => (
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
              <button className="py-3 text-red-500 font-bold hover:bg-red-500 hover:text-white hover:p-2 hover:rounded-lg">
                View Details <span className="text-sm"> &gt; </span>{" "}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
