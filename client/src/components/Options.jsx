import React, { useState, useContext } from "react";
import { SocketContext } from "../SocketContext";
import { FiCopy, FiPhone, FiPhoneOff } from "react-icons/fi";

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div className="container mx-auto my-8 p-0 w-3/4 md:w-1/2">
      <div className="bg-white p-8 border-2 border-gray-400 rounded-lg">
        <form className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div>
              <h6 className="text-lg mb-2">Username/Name</h6>
              <input
              placeholder='Your Name'
                type="text"
                className="border-2 border-gray-300 rounded-lg w-full px-4 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                className=" font-bold bg-blue-500 text-white hover:shadow-md rounded hover:text-gray-200 py-2 px-4  bg-opacity-100 w-full flex items-center justify-center mt-4 "
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(me);
                }}
              >
                <FiCopy className="mr-2 text-lg" /> Copy ID
              </button>
            </div>
            <div>
              <h6 className="text-lg mb-2">Make a call</h6>
              <input
              placeholder='Paste ID'
                type="text"
                className="border-2 border-gray-300 rounded-lg w-full px-4 py-2"
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
              />
              {callAccepted && !callEnded ? (
                <button
                  className="mt-4 bg-red-500 text-white hover:shadow-md rounded hover:text-gray-200 py-2 px-4 w-full flex items-center justify-center"
                  onClick={leaveCall}
                >
                  <FiPhoneOff className="mr-2 text-lg" /> End Call
                </button>
              ) : (
                <button
                  className="mt-4 bg-blue-500 text-white hover:shadow-md rounded hover:text-gray-200 py-2 px-4 w-full flex items-center justify-center"
                  onClick={(e) => {
                    e.preventDefault();
                    callUser(idToCall);
                  }}
                >
                  <FiPhone className="mr-2 text-lg" /> Call
                </button>
              )}
            </div>
          </div>
        </form>
        {children}
      </div>
    </div>
  );
};

export default Options;
