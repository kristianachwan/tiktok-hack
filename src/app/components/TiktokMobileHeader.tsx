import React from "react";

type Props = {};
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
export default function TiktokMobileHeader({}: Props) {
  return (
    <div className="bg-white p-2 flex gap-5">
      <AiOutlineArrowLeft color="black" size={30} />
      <div className="ml-auto">
        <BiDotsHorizontalRounded color="black" size={30} />
      </div>
    </div>
  );
}
