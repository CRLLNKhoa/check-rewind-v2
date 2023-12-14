import React, { useState } from "react";

export default function Ads() {
  const [isClose, setIsClose] = useState(false);
  if (isClose) {
    return null;
  }
  return (
    <div className="fixed w-full h-full top-0 left-0 z-50 right-0 bottom-0 px-4">
      <div
        className="bg-white lg:w-1/2 w-[94%] max-w-lg p-4 z-50 absolute left-1/2 top-1/2 
      -translate-x-1/2 -translate-y-1/2 text-center rounded-md shadow-2xl select-none"
      >
        <p onClick={() => setIsClose(true)} className="absolute right-0 top-0 cursor-pointer">
          <img
            src="./svg/close.svg"
            alt="s"
            className="w-8"
          />
        </p>
        <h1 className="font-bold text-xl">Thông báo xíu!</h1>
        <p className="my-4">
          Guild: <b className="text-red-500">VIETNAMONTOP</b> cần tuyển 1 thành
          viên trên 18k chăm online đua tóp, ae trong guild vui vẻ, hòa đồng,
          chia sẻ kinh nghiệm giúp nhau leo day nhanh và có nhìu hoạt động trao
          thưởng có thể lên đến hàng ngàn <del>tỉ</del> VNĐ.
        </p>
        <a
          href="https://www.facebook.com/lnkhoa1205"
          target="_blank"
          className="p-2 rounded-lg hover:bg-green-900 duration-500 bg-green-600 text-white px-8"
        >
          Liên hệ
        </a>
      </div>
      <div
        onClick={() => setIsClose(true)}
        className="absolute top-0 left-0 bottom-0 right-0 bg-black/20"
      ></div>
    </div>
  );
}
