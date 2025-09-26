import React from "react";
import Link from "next/link";
const page = () => {
  const menuItems = [
    { label: "Эхлэл", href: "/home" },
    { label: "Мэдээ", href: "/news" },
    { label: "Статистик", href: "/statistics" },
    { label: "Ил тод байдал", href: "/transparency" },
    { label: "Хууль, эрх зүй", href: "/law" },
  ];
  return (
    <div className="text-white">
      <div className="flex flex-row justify-center gap-4 bg-blue-400 ">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="p-4  hover:text-blue-400 hover:bg-white rounded-xl"
          >
            <div className="">{item.label}</div>
          </Link>
        ))}
      </div>
      <div className="w-full h-[350px] bg-green-300 text-center">zurag</div>
    </div>
  );
};

export default page;
