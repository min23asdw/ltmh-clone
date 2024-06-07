"use client";
import Image from "next/image";
import SearchIcon from "../../asset/icons/search";
import CompressIcon from "../../asset/icons/compress";
import CompressSelectIcon from "../../asset/icons/compress_select";

import InvestIcon from "../../asset/icons/invest";
import FaqIcon from "../../asset/icons/faq";
import FaqSelectIcon from "../../asset/icons/faq_select";

// import Image from 'next/image';

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [selectCatId, setSelectCatId] = useState<number>(0);

  const Cat = [
    { icon: [<CompressIcon />, <CompressSelectIcon />], name: "compress" },
    { icon: [<InvestIcon />, <InvestIcon />], name: "invest" },
    { icon: [<FaqIcon />, <FaqSelectIcon />], name: "faq" },
  ];

  return (
    <header className="sticky top-0 w-full bg-white flex flex-row justify-evenly  items-center  px-2 md:px-20">
      <div className=" lg:ml-[10%]  flex-row gap-2 hidden md:flex">
        <h1 className="text-center m-auto  font-bold text-blue-500 drop-shadow-md">
          B
        </h1>

        <form action="" className=" m-2">
          <div className=" rounded-default border overflow-hidden  ">
            <div className="relative">
              <input
                type="text"
                className="pl-10 pr-4 py-2 bg-gray-100 max-w-48 outline-0"
                placeholder="ค้นหา"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center  ">
                <button className=" stroke-gray-400 text-gray-400 ">
                  <SearchIcon />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="  flex flex-row justify-evenly  w-full gap-2">
        <div className="   flex flex-row gap-14 justify-center my-1">
          {Cat.map((item, index) => (
            <button onClick={() => setSelectCatId(index)} key={item.name}>
              {selectCatId == index ? (
                <div
                  key={index}
                  className="  px-1 py-2 transition-all duration-300  cursor-pointer   stroke-blue-500 text-blue-500   "
                >
                  {item.icon[1]}
                </div>
              ) : (
                <div
                  key={index}
                  className="  px-1 py-2 transition-all duration-300  cursor-pointer stroke-[#0000] text-black  "
                >
                  {item.icon[0]}
                </div>
              )}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex gap-1 items-center right-2 my-auto">
          <span>มีบัญชีอยู่แล้ว?</span>
          <a className="mx-1 font-bold text-blue-500" href="#">
            เข้าสู่ระบบ
          </a>
          <span>หรือ</span>
          <a className="mx-1 font-bold text-blue-500" href="#">
            ลงทะเบียน
          </a>
        </div>

        <div className="flex lg:hidden items-center right-2 my-auto">
          <a className="mx-1 font-bold text-blue-500" href="#">
            เข้าสู่ระบบ
          </a>
        </div>
      </div>
    </header>
  );
}
