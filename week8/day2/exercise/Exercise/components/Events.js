import React, { useState } from "react";

const Events = () => {
    const clickMe = () => {
        alert("I was clicked");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            alert(`The Enter key was pressed, your input is: ${event.target.value}`);
        }
    };
    const [isToggleOn, setIsToggleOn] = useState(true);

    const toggle = () => {
        setIsToggleOn(!isToggleOn);
    };

    return (
        <div>
            <button onClick={clickMe}>Click Me</button>
            <input type="text" onKeyDown={handleKeyDown} />
            <button onClick={toggle}>
                {isToggleOn ? "ON" : "OFF"}
            </button>
        </div>
    );
};

export default Events;
