import React, { useState } from "react";
import { time } from "@/pages/api/time";
import MyHead from "@/components/MyHead";

function Time() {
  const [tab, settab] = useState(1);
  const [num, setNum] = useState({ from: 0, to: 74 });
  return (
   <>
     <MyHead
        title="Code by Lương Khoa"
        description="Welcome to website!"
        image="https://luongkhoa.io.vn/logo.png"
        url="https://check-rewind.vercel.app/"
      />
        <section className="mt-24 min-h-screen mx-2">
          <p className="mb-4">
            The data provided by players is therefore incomplete and not highly
            accurate.
          </p>
          <div className="tabs tabs-boxed">
            <a
              onClick={() => {
                settab(1);
                setNum({ from: 0, to: 74 });
              }}
              className={tab === 1 ? "tab-active tab" : "tab"}
            >
              1000
            </a>
            <a
              onClick={() => {
                settab(2);
                setNum({ from: 75, to: 135 });
              }}
              className={tab === 2 ? "tab-active tab" : "tab"}
            >
              1500
            </a>
            <a
              onClick={() => {
                settab(3);
                setNum({ from: 136, to: 159 });
              }}
              className={tab === 3 ? "tab-active tab" : "tab"}
            >
              2000
            </a>
            <a
              onClick={() => {
                settab(4);
                setNum({ from: 160, to: 228 });
              }}
              className={tab === 4 ? "tab-active tab" : "tab"}
            >
              3000
            </a>
            <a
              onClick={() => {
                settab(5);
                setNum({ from: 229, to: 280 });
              }}
              className={tab === 5 ? "tab-active tab" : "tab"}
            >
              5000
            </a>
            <a
              onClick={() => {
                settab(6);
                setNum({ from: 281, to: 317 });
              }}
              className={tab === 6 ? "tab-active tab" : "tab"}
            >
              8000
            </a>
            <a
              onClick={() => {
                settab(7);
                setNum({ from: 318, to: 369 });
              }}
              className={tab === 7 ? "tab-active tab" : "tab"}
            >
              10000
            </a>
            <a
              onClick={() => {
                settab(8);
                setNum({ from: 370, to: 9000 });
              }}
              className={tab === 8 ? "tab-active tab" : "tab"}
            >
              11600
            </a>
          </div>
    
          <div>
            <div className="flex flex-col w-full gap-2 mt-4">
              {time.map((item, index) => {
                if (index >= num.from && index <= num.to) {
                  return (
                    <div key={index} className="cursor-pointer hover:bg-lime-300 h-10 odd:bg-red-300 even:bg-sky-300 rounded-sm justify-center flex items-center gap-4">
                      <span className="font-bold">Day: {item.Day}</span>{" "}
                      <span>--- </span>
                      <span className="">
                        The average time: <b>{item.Time}</b>
                      </span>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </section>
   </>
  );
}

export default Time;
