import React, { useState, useEffect } from 'react';
import { v1 as uuid } from "uuid";


function Notification({ message }) {
    return (
        <div className="notification-box">
            {message}
        </div>
    );
}

const CreateRoom = (props) => {
    const [showNotification, setShowNotification] = useState(true);
    const [notificationMessage, setNotificationMessage] = useState('');


    useEffect(() => {
        (function showMessage() {
            setTimeout(function () {
                setShowNotification(false);
                setNotificationMessage(<p style={{ fontSize: '8px', margin: '0' }}>Dear Potential Employer, I would like to bring to your attention that due to technical issues with the host server, a certain feature of the project which is when users joins the room can only be viewed on localhost. I apologize for any inconvenience this may cause, but I assure you that the feature works perfectly on localhost. Thank you for your understanding.</p>);
                setTimeout(function () {
                    setShowNotification(true);
                    showMessage();
                }, 4000);
            }, 7000);
        })();
    }, []);


    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
        <>
            {showNotification && <Notification message={notificationMessage} className="show" />}
            <div className='welcome-div'>
                <h4>Welcome! Click the button to Create Room</h4>
                <button onClick={create}>Create room</button>
            </div>
        </>
    );
};

export default CreateRoom;
