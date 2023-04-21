import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-center">
      {stream && (
        <div className="bg-white p-4 border-2 border-gray-400 m-4 rounded-lg">
          <div className="w-full">
            <h5 className="text-lg mb-2">{name || "Name"}</h5>
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className="w-80 md:w-96"
            />
          </div>
        </div>
      )}

      {callAccepted && !callEnded && (
        <div className="bg-white p-4 border-2 border-gray-400 m-4 rounded-lg">
          <div className="w-full">
            <h5 className="text-lg mb-2">{call.name || "Name"}</h5>
            <video
              playsInline
              ref={userVideo}
              autoPlay
              className="w-80 md:w-96"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
