import React from "react";
import Container from "../components/Container";
import { AiFillStar } from "react-icons/ai";

export default function Page() {
  return (
    <Container navigateString="/groupBuyLastPage">
      <div className="flex flex-col h-full w-full items-center gap-4 ">
        <div className="flex w-full border-b border-gray-200 justify-between p-4">
          <div className="flex justify-start items-center gap-1">
            <div className="h-7 w-7 bg-blue-200 rounded-full"></div>
            <div className="flex flex-col justify-between  items-centerh-full">
              <div className="flex">
                <p className="text-xs font-semibold">Bryan Tay</p>
                <p className="text-xs font-bold ml-2">3.4</p>
                <AiFillStar size={12} className="text-yellow-500" />
              </div>
              <p className="text-xs">Owner</p>
            </div>
          </div>
          <div className="font-semibold border-2 border-rose-600 text-rose-600 text-xs px-2 py-1 rounded-xl flex justify-center items-center">
            Chat to Enquire
          </div>
        </div>

        <div className="flex w-full border-b border-gray-200 justify-between items-center p-4">
          <div className="flex justify-start items-center gap-1">
            <div className="h-7 w-7 bg-blue-200 rounded-full"></div>
            <div className="flex flex-col justify-between  items-centerh-full">
              <div className="flex">
                <p className="text-xs font-semibold">Bryan Tay</p>
              </div>
              <p className="text-xs">Member</p>
            </div>
          </div>
        </div>
        <div className="flex w-full border-b border-gray-200 justify-between items-center p-4">
          <div className="flex justify-start items-center gap-1">
            <div className="h-7 w-7 bg-blue-200 rounded-full"></div>
            <div className="flex flex-col justify-between  items-centerh-full">
              <div className="flex">
                <p className="text-xs font-semibold">Bryan Tay</p>
              </div>
              <p className="text-xs">Member</p>
            </div>
          </div>
        </div>
        <div className="flex w-full border-b border-gray-200 justify-between items-center p-4">
          <div className="flex justify-start items-center gap-1">
            <div className="h-7 w-7 bg-blue-200 rounded-full"></div>
            <div className="flex flex-col justify-between  items-centerh-full">
              <div className="flex">
                <p className="text-xs font-semibold">Bryan Tay</p>
              </div>
              <p className="text-xs">Member</p>
            </div>
          </div>
        </div>
        <div className="flex w-full border-b border-gray-200 justify-between items-center p-4">
          <div className="flex justify-start items-center gap-1">
            <div className="h-7 w-7 bg-blue-200 rounded-full"></div>
            <div className="flex flex-col justify-between  items-centerh-full">
              <div className="flex">
                <p className="text-xs font-semibold">Bryan Tay</p>
              </div>
              <p className="text-xs">Member</p>
            </div>
          </div>
        </div>
        <div className="flex w-full border-b border-gray-200 justify-between items-center p-4">
          <div className="flex justify-start items-center gap-1">
            <div className="h-7 w-7 bg-blue-200 rounded-full"></div>
            <div className="flex flex-col justify-between  items-centerh-full">
              <div className="flex">
                <p className="text-xs font-semibold">Bryan Tay</p>
              </div>
              <p className="text-xs">Member</p>
            </div>
          </div>
        </div>
        <div className="flex w-full border-b border-gray-200 justify-between items-center p-4">
          <div className="flex justify-start items-center gap-1">
            <div className="h-7 w-7 bg-blue-200 rounded-full"></div>
            <div className="flex flex-col justify-between  items-centerh-full">
              <div className="flex">
                <p className="text-xs font-semibold">Bryan Tay</p>
              </div>
              <p className="text-xs">Member</p>
            </div>
          </div>
        </div>
        <div className="flex w-full border-b border-gray-200 justify-between items-center p-4">
          <div className="flex justify-start items-center gap-1">
            <div className="h-7 w-7 bg-blue-200 rounded-full"></div>
            <div className="flex flex-col justify-between  items-centerh-full">
              <div className="flex">
                <p className="text-xs font-semibold">Bryan Tay</p>
              </div>
              <p className="text-xs">Member</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
