import Link from "next/link";
import MyHead from "../components/MyHead";
import { dataSingleCost } from "@/pages/api/singleCost";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [input, setInput] = useState({
    curr: 0,
    expected: 0
  })
  const [from, setFrom] = useState(1000);
  const [to, setTo] = useState(1000);
  const [sort, setsort] = useState(false)

  const handleSearch = () => {
    setFrom(input.curr)
    setTo(input.expected)
  }

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
            <h2 className="font-bold">Quick Rewind</h2>
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
                onChange={(e)=> setInput({...input, curr: e.target.value})}
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
                onChange={(e)=> setInput({...input, expected: e.target.value})}
              />
            </div>
          </div>
        <div className="flex gap-4">
            <button onClick={handleSearch} className="btn mt-2">
              <img className="w-5" src="svg/search.svg" alt="" />
              Search
            </button>
            <button onClick={()=> setsort(!sort)} className={`btn mt-2 ${!sort&&"btn-ghost"}`}>
              <img className="w-5" src="svg/sort.svg" alt="" />
            </button>
        </div>
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
              {sort?dataSingleCost
                .filter(
                  (filtered) => from <= filtered.day && filtered.day <= to
                ).sort((a,b)=> a.cost - b.cost)
                .map((item) => {
                  const bg = (cost) => {
                    if(cost<200){
                      return "bg-[#6efa75]"
                    }
                    if(cost<210){
                      return "bg-[#8bea4c]"
                    }
                    if(cost<220){
                      return "bg-[#a2da18]"
                    }
                    if(cost<230){
                      return "bg-[#b6c800]"
                    }
                    if(cost<240){
                      return "bg-[#c8b400]"
                    }
                    if(cost<250){
                      return "bg-[#d89f00]"
                    }
                    if(cost<260){
                      return "bg-[#e68700]"
                    }
                    if(cost<270){
                      return "bg-[#f16c00]"
                    }
                    if(cost<280){
                      return "bg-[#fa4a00]"
                    }
                    if(cost<380){
                      return "bg-[#ff0006]"
                    }
                    if(cost>380){
                        return "bg-[#ff0006]"
                    }
                  }
                  return(
                    <tr key={item.day} className={`text-black ${bg(item.cost)} text-center hover cursor-pointer`}>
                    <th>{item.day}</th>
                    <td>{item.skip}</td>
                    <th>{Math.floor(item.tickets)}</th>
                    <th >{Math.floor(item.cost)}</th>
                  </tr>
                  )
                }):dataSingleCost
                .filter(
                  (filtered) => from <= filtered.day && filtered.day <= to
                )
                .map((item) => {
                  const bg = (cost) => {
                    if(cost<200){
                      return "bg-[#6efa75]"
                    }
                    if(cost<210){
                      return "bg-[#8bea4c]"
                    }
                    if(cost<220){
                      return "bg-[#a2da18]"
                    }
                    if(cost<230){
                      return "bg-[#b6c800]"
                    }
                    if(cost<240){
                      return "bg-[#c8b400]"
                    }
                    if(cost<250){
                      return "bg-[#d89f00]"
                    }
                    if(cost<260){
                      return "bg-[#e68700]"
                    }
                    if(cost<270){
                      return "bg-[#f16c00]"
                    }
                    if(cost<280){
                      return "bg-[#fa4a00]"
                    }
                    if(cost<380){
                      return "bg-[#ff0006]"
                    }
                    if(cost>380){
                        return "bg-[#ff0006]"
                    }
                  }
                  return(
                    <tr key={item.day} className={`text-black ${bg(item.cost)} text-center hover cursor-pointer`}>
                    <th>{item.day}</th>
                    <td>{item.skip}</td>
                    <th>{Math.floor(item.tickets)}</th>
                    <th>{Math.floor(item.cost)}</th>
                  </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
