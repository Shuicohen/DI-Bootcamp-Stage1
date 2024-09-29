import React, { useState, useRef } from 'react'

function CharacterCounter() {
    const inputRef = useRef(null)
    const [count, setCount] = useState(0)

    const handleInputChange = () => {
        const inputValue = inputRef.current.value.length;
        setCount(inputValue);
    };

    return (
        <div>
            <h1>Character Counter</h1>
            <input type="text" ref={inputRef} onChange={handleInputChange} />
            <p>Character Count: {count}</p>
        </div>
    )
}

export default CharacterCounter;