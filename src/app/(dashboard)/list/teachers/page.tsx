import Table from "@/components/commons/tables";
import Pagination from "@/components/commons/tables/Pagination";
import TableSearch from "@/components/commons/tables/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const columns: Table[] = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "min-w-52",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "min-w-52",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "min-w-52",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "min-w-52",
  },
  {
    header: "Address",
    accessor: "address",
    className: "min-w-52",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

export default function TeacherList() {
  const renderRow = (item: Teacher) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight"
      >
        <td className="flex items-center justify-start gap-4 p-4 min-w-60">
          <Image
            src={item.photo}
            alt={item.name}
            width={40}
            height={40}
            className="md:hidden xl:block size-10 rounded-full object-cover"
          />
          <div className="">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item?.email}</p>
          </div>
        </td>
        <td className="min-w-52">{item.teacherId}</td>
        <td className="min-w-52">{item.subjects.join(", ")}</td>
        <td className="min-w-52">{item.classes.join(", ")}</td>
        <td className="min-w-52">{item.phone}</td>
        <td className="min-w-52">{item.address}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
              <button className="size-7 flex items-center justify-center rounded-full bg-sky">
                <Image src={"/view.png"} alt="" width={16} height={16} />
              </button>
            </Link>
            {role === "admin" && (
              <button className="size-7 flex items-center justify-center rounded-full bg-purple">
                <Image src={"/delete.png"} alt="" width={16} height={16} />
              </button>
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold hidden md:block">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="size-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src={"/filter.png"} alt="" width={14} height={14} />
            </button>
            <button className="size-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src={"/sort.png"} alt="" width={14} height={14} />
            </button>
            <button className="size-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src={"/plus.png"} alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={teachersData} />
      <Pagination />
    </div>
  );
}
