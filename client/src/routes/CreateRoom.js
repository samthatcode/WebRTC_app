import React from "react";
import { v1 as uuid } from "uuid";

const CreateRoom = (props) => {
    function create() {
        const id = uuid();
        props.history.push(`/room/${id}`);
    }

    return (
        <div className='welcome-div'>
            <h4>Welcome! Click the button to Create Room</h4>
            <button onClick={create}>Create room</button>
        </div>
    );
};

export default CreateRoom;
