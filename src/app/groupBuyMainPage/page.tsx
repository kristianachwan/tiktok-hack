import React from "react";
import Container from "../components/Container";
import MapComponent from "./components/GoogleMap";
import GroupBuyBottomComponent from "./GroupBuyBottomComponent";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
type Props = {};

export default function Home({}: Props) {
  return (
    <Container navigateString={"/order"}>
     
      <div className="flex flex-col">
        <MapComponent />
        <GroupBuyBottomComponent />
      </div>
    </Container>
  );
}
