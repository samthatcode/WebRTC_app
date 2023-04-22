import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
// import Chat from "./components/Chat";
import Notifications from "./components/Notifications";

const App = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center ">
        <div className="rounded-lg border-2 border-wine-900 text-blue-700 font-bold p-4 mb-6 mt-8 w-11/12 md:w-1/3">
          <h4 className="text-2xl text-center">Video Chat App</h4>
        </div>
        <VideoPlayer />
        <Options>
          <Notifications />
        </Options>
      </div>
      {/* <Chat /> */}
    </div>
  );
};

export default App;
