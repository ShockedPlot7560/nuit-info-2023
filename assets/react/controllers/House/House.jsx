import React, { useState } from 'react';
import Room from "./Room";

export default function (props) {

    const [currentRoomName, setCurrentRoomName] = useState('garage');
    const handleRoomChange = (newRoomName) => {
        setCurrentRoomName(newRoomName);
    };

    return (
        <div className={`
            ${currentRoomName === 'garage' ? 'bg-garage' : ''}
            ${currentRoomName === 'outdoor' ? 'bg-outdoor' : ''}
            ${currentRoomName === 'kitchen' ? 'bg-kitchen' : ''}
            ${currentRoomName === 'livingroom' ? 'bg-livingroom' : ''}
            ${currentRoomName === 'bedroom' ? 'bg-bedroom' : ''}
            ${currentRoomName === 'bathroom' ? 'bg-bathroom' : ''}
        `}>
            <Room
                currentRoomName={currentRoomName}
                navigateTo={handleRoomChange}
                navigation={props.navigation[currentRoomName].neighbours}
            />
        </div>
    )
}
