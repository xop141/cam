import React from "react";
import { Separator } from "@/components/ui/separator";
import { Shield, TrafficCone, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-8 py-12 flex flex-col gap-16">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">Бидний тухай</h1>
          <div className="flex justify-center md:justify-start">
            <Separator className="border-gray-700 w-32" />
          </div>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center md:text-left">
            Орчин үеийн дэвшилтэт технологи бүхий теле хяналтын системээр нийгмийн 
            амар тайван, аюулгүй орчин бүрдүүлэх.
          </p>
        </div>

        <div className="flex flex-col gap-8 flex-1">
          {[{
              icon: <Shield className="w-12 h-12 text-blue-400 p-2 border rounded-full border-gray-600" />,
              title: "Нийтийн аюулгүй байдал",
              description: "Гэмт хэрэг, зөрчлийг илрүүлэх, урьдчилан сэргийлэх",
            },
            {
              icon: <TrafficCone className="w-12 h-12 text-yellow-400 p-2 border rounded-full border-gray-600" />,
              title: "Замын хөдөлгөөний хяналт",
              description: "Хөдөлгөөний хяналтыг сайжруулах, аюулгүй орчин бүрдүүлэх",
            },
            {
              icon: <Users className="w-12 h-12 text-green-400 p-2 border rounded-full border-gray-600" />,
              title: "Иргэдийн хамгаалал",
              description: "Амь нас, эрүүл мэнд, эд хөрөнгийг хамгаалах",
            }
          ].map((card, idx) => (
            <div
              key={idx}
              className="flex gap-4 items-start border border-gray-700 p-6 rounded-2xl bg-black/50 backdrop-blur-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {card.icon}
              <div>
                <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-300 leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        <Separator className="border-gray-700 w-32" />
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 bg-gray-900 rounded-xl shadow-lg py-12 px-6">
          {[
            { value: "24/7", label: "Тасралтгүй хяналт", color: "text-blue-400" },
            { value: "AI", label: "Ухаалаг системүүд", color: "text-purple-400" },
            { value: "HD", label: "Өндөр нарийвчлал", color: "text-green-400" },
            { value: "100%", label: "Найдвартай байдал", color: "text-yellow-400" },
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <p className={`text-3xl md:text-4xl font-bold ${item.color}`}>{item.value}</p>
              <p className="text-gray-300 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
