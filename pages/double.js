import React from "react";
import MyHead from "../components/MyHead";
import { doubleCost } from "@/pages/api/doubleCost";
import { useState } from "react";

function Double() {
  const [input, setInput] = useState({
    curr: 0,
    expected: 0,
  });
  const [from, setFrom] = useState(2000);
  const [to, setTo] = useState(2000);

  const handleSearch = () => {
    setFrom(input.curr);
    setTo(input.expected);
  };
  return (
    <>
      <MyHead
        title="Code by Lương Khoa"
        description="Welcome to website!"
        image="https://luongkhoa.io.vn/logo.png"
        url="https://check-rewind.vercel.app/"
      />
      <main className="w-full bg-white min-h-screen flex mt-24 mb-10 flex-col">
        {/* NOTE search */}
        <section className="flex flex-col items-center mx-2">
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold">Quick Double Rewind</h2>
            <p>The lower the cost, the faster the rewind time</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-bold">Day current?</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-md input-bordered w-full max-w-xs"
                onChange={(e) => setInput({ ...input, curr: e.target.value })}
              />
            </div>
            <img
              className="w-[100px] h-8 mt-auto -translate-y-2"
              src="svg/arrow.svg"
              alt="arow"
            />
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text"></span>
                <span className="label-text font-bold">Expected day?</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-md input-bordered w-full max-w-xs"
                onChange={(e) =>
                  setInput({ ...input, expected: e.target.value })
                }
              />
            </div>
          </div>
          <button onClick={handleSearch} className="btn mt-2">
            <img className="w-5" src="svg/search.svg" alt="" />
            Search
          </button>
        </section>

        {/* NOTE Table */}
        <div className="overflow-x-auto mx-2 mt-4">
          <table className="table">
            {/* head */}
            <thead className="bg-sky-500">
              <tr className="text-white text-center">
                <th>Max Day</th>
                <th>Skip Day</th>
                <th>Tickets</th>
                <th>Cost*</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {doubleCost
                .filter(
                  (filtered) => from <= filtered.maxDay && filtered.maxDay <= to
                )
                .map((item) => {
                  const color = (cost) => {
                    if (cost > 200 && cost < 300) {
                      return "text-lime-400";
                    }
                    if (cost < 400 && cost >= 300) {
                      return "text-lime-500";
                    }
                    if (cost < 450 && cost >= 400) {
                      return "text-lime-600";
                    }
                    if (cost < 500 && cost >= 450) {
                      return "text-red-700";
                    }
                    if (cost < 550 && cost >= 500) {
                      return "text-red-800";
                    }
                    if (cost < 600 && cost >= 550) {
                      return "text-red-900";
                    }
                    if (cost < 700 && cost >= 600) {
                      return "text-red-900";
                    }
                  };
                  return (
                    <tr className="text-black text-center hover cursor-pointer">
                      <th>{item.maxDay}</th>
                      <td>{item.skip}</td>
                      <th>{Math.floor(item.tickets)}</th>
                      <th className={color(item.cost)}>
                        {Math.floor(item.cost)}
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default Double;
