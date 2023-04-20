import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", handleMessage);
    return () => {
      socket.off("message", handleMessage);
    };
  }, []);

  const handleMessage = (msg) => {
    setMessages((prevMessages) => [...prevMessages, msg]);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("message", message);
      setMessage("");
    }
  };

  return (
    <>
      <div className=" mt-4 overflow-auto h-24">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="bg-blue-900 text-white rounded-lg px-4 py-2 mx-2 mb-2 message w-max max-w-md whitespace-pre-wrap block"
          >
            {msg}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col md:mb-3 mb-4 mx-8 md:flex-row items-center ">
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow rounded-lg p-2 w-full md:w-auto shadow-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-4 py-2 ml-0 md:ml-2 mt-2 md:mt-0 font-medium hover:bg-blue-700 shadow-md "
        >
          Send
        </button>
      </form>
    </>
  );
};

export default Chat;
