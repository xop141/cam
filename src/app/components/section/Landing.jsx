import React from "react";
import Link from "next/link";
import Threads from "../background/Threads";

const Landing = () => {
  const menuItems = [
    { label: "Эхлэл", href: "/home" },
    { label: "Мэдээ", href: "/news" },
    { label: "Статистик", href: "/statistics" },
    { label: "Ил тод байдал", href: "/transparency" },
    { label: "Хууль, эрх зүй", href: "/law" },

  ];

  return (
    <div className="w-full h-screen relative overflow-hidden flex flex-col items-center justify-between py-24 text-center bg-gray-900 text-white">
      <div className="absolute inset-0 z-0">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>

      <div className="z-10 flex flex-col items-center gap-8">
        <div className="w-[200px] h-[200px] rounded-full bg-black/70 backdrop-blur-xl border-2 border-gray-600 shadow-lg" />

        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
            НИЙСЛЭЛИЙН ЧИНГЭЛТЭЙ ДҮҮРЭГ
          </h1>
          <p className="text-gray-300 text-base md:text-lg mt-1">
            ТЕЛЕ КАМЕРЫН ХЯНАЛТЫН ДЭД ТӨВ
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="flex items-center justify-center border border-gray-600 rounded-full px-6 py-3 bg-black/50 backdrop-blur-lg text-white font-medium hover:bg-white hover:text-black transition duration-300 cursor-pointer shadow-md">
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="z-10 space-y-1 text-sm text-gray-400 mt-12">
        <p>Утас: 76000909</p>
        <p>Мэйл хаяг: telecamera@chingeltei.gov.mn</p>
      </div>
    </div>
  );
};

export default Landing;
