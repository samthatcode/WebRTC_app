import React, { useState, useEffect } from "react";
import  io  from "socket.io-client";
import '../index.css';

// const socket = io("http://localhost:5000");
const socket = io("https://video-chat-app-m5ad.onrender.com");


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
      <div className="message-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="message"
          >
            {msg}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="form-wrapper">
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input-field"
        />
        <button
          type="submit"
          className="submit-button"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default Chat;
