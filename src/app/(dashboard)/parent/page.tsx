import Announcements from "@/components/admin/Announcement";
import BigCalendar from "@/components/commons/inputs/BigCalendar";
import EventCalendar from "@/components/commons/inputs/Calendar";
import React from "react";
import "react-calendar/dist/Calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function TeacherPage() {
  return (
    <div className="p-4 flex-1 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (John Doe)</h1>
          <div className="h-full">
            <BigCalendar />
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
}
