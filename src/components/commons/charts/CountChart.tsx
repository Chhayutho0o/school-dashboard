"use client";

import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "#ffff",
  },
  {
    name: "Girls",
    count: 60,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 40,
    fill: "#C3EBFA",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

export default function CountChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[70%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src={"/maleFemale.png"}
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="size-5 bg-sky rounded-full" />
          <h1 className="font-bold">1,232</h1>
          <h2 className="text-xs text-gray-300">Boys (40%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="size-5 bg-yellow rounded-full" />
          <h1 className="font-bold">2,398</h1>
          <h2 className="text-xs text-gray-300">Girls (60%)</h2>
        </div>
      </div>
    </div>
  );
}
