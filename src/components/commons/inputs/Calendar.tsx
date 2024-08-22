"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Example title",
    time: "12:00 PM - 2:00 PM",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Example title",
    time: "12:00 PM - 2:00 PM",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "Example title",
    time: "12:00 PM - 2:00 PM",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

export default function EventCalendar() {
  const [value, setValue] = useState<Value>(new Date());
  return (
    <div className="bg-white">
      <Calendar value={value} onChange={setValue} />
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between ">
          <h1 className="text-lg font-semibold my-4">Events</h1>
          <Image src={"/moreDark.png"} alt="" width={20} height={20} />
        </div>
        <div className="flex flex-col gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-sky even:border-t-purple"
            >
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                <span className="text-gray-300 text-xs">{event.time}</span>
              </div>
              <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
