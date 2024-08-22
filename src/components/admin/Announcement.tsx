import React from "react";

export default function Announcements() {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Announcements</h1>
        <span className="text-xs  text-gray-400">View all</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-skyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor </h2>
            <span className="text-xs text-gray-400 bg-white p-1 rounded-md">
              2023-03-02
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            earum quasi porro cumque, laboriosam
          </p>
        </div>
        <div className="bg-yelloLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor </h2>
            <span className="text-xs text-gray-400 bg-white p-1 rounded-md">
              2023-03-02
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            earum quasi porro cumque, laboriosam
          </p>
        </div>
        <div className="bg-purpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor </h2>
            <span className="text-xs text-gray-400 bg-white p-1 rounded-md">
              2023-03-02
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            earum quasi porro cumque, laboriosam
          </p>
        </div>
      </div>
    </div>
  );
}
