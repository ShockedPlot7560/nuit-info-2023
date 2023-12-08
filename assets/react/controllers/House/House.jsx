import React, { useState } from 'react';
import Room from "./Room";

export default function (props) {

    const [currentRoomName, setCurrentRoomName] = useState('garage');
    const handleRoomChange = (newRoomName) => {
        setCurrentRoomName(newRoomName);
    };

    const objectList = [
        {positionX: 532, positionY: 753},
        {positionX: 365, positionY: 211},
        {positionX: 1321, positionY: 345},
    ]

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
                objectList={objectList}
            />
        </div>
    )
}
