import React, { useContext, useState } from "react";
import Chat from './Chat'


import { SocketContext } from "../SocketContext";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  const [showChat, setShowChat] = useState(false);


  const handleAnswerClick = () => {
    setShowChat(true);
    answerCall();
  }

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className="flex justify-around mt-4 gap-4 ">
          <h1 className="bg-purple-700 text-white font-bold py-2 px-4 rounded animate-bounce  bg-opacity-100">
            {call.name} is calling:
          </h1>
          <button
            className="font-bold bg-blue-500 text-stone-50  hover:shadow-md rounded hover:text-stone-200 py-2 px-4 animate-pulse bg-opacity-100"
            onClick={handleAnswerClick}
          >
            Answer
          </button>
        </div>
      )}
       {showChat && <Chat />}
    </>
  );
};

export default Notifications;
