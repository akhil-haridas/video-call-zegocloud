import React from "react";
import { useParams } from "react-router-dom";

const RoomPage = () => {
  const { roomId } = useParams();
  return <div>RoomPage{roomId}</div>;
};

export default RoomPage;
