import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateRoom from "./routes/CreateRoom";
import Room from "./routes/Room";


function Notification({ message }) {
  return (
    <div  className="notification-box">
      {message}
    </div>
  );
}


function App() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  useEffect(() => {
    (function showMessage() {
      setTimeout(function () {
        setShowNotification(true);
        setNotificationMessage('Dear Potential Employer, I would like to bring to your attention that due to technical issues with the host server, a certain feature of the project can only be viewed on localhost. I apologize for any inconvenience this may cause, but I assure you that the feature works perfectly on localhost. Thank you for your understanding.');
        setTimeout(function () {
          setShowNotification(false);
          showMessage();
        }, 5000);
      }, 5000);
    })();
  }, []);

  return (
    <>
     {showNotification && <Notification message={notificationMessage} />}
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CreateRoom} />
          <Route path="/room/:roomID" component={Room} />
        </Switch>
      </BrowserRouter>
   </>
  );
}

export default App;
