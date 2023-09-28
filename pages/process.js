import React from "react";

function Process() {
  return (
    <>
      <section className="mt-24 w-screen px-8 flex flex-wrap min-h-screen">
        <div className="form-control px-2 lg:w-1/4">
          <label className="label">
            <span className="label-text">Date?</span>
          </label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control px-2 lg:w-1/4">
          <label className="label">
            <span className="label-text">Tickets?</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <label className="label">
            <span className="label-text">Tickets were received today?</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control px-2 lg:w-1/4">
          <label className="label">
            <span className="label-text">Day before?</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <label className="label">
            <span className="label-text">Day after?</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control px-2 lg:w-1/4">
          <label className="label">
            <span className="label-text">Count Rewind before?</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
          <label className="label">
            <span className="label-text">Count Rewind after?</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control px-2 lg:w-1/4">
          <label className="label">
            <span className="label-text">Date?</span>
          </label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
      </section>
    </>
  );
}

export default Process;
