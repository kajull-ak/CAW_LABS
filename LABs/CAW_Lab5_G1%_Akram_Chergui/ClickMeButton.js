// Exo1-1
import React, { useState } from 'react';

const ClickMeButton1 = () => {
    //exo1-1
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
    };
    const [clickCount, setClickCount] = useState(0);

    //exo1-2
    const handleClick2 = () => {
        setClickCount((prevCount) => prevCount + 1);
    };
    const getMessage = () => {
        return clickCount % 2 === 0 ? 'Not Clicked' : 'Clicked';
    };

    //exo1-3
    const [clickedButton, setClickedButton] = useState(null);
    const handleButtonClick = (buttonNumber) => {
        setClickedButton(buttonNumber);
    };
    
    //exo1-4
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };

    //exo2-1
    const tab = ["hello", "world", "from", "react"];
    //exo2-3
    const initialTab = ["hello", "world", "from", "react"];
    const [tab2, setTab] = useState(initialTab);
    
    const handleItemClick = (index) => {
        setTab((prevTab) => {
            const newTab = [...prevTab];
            newTab.splice(index, 1);
            return newTab;
        });
    };
    
    return (
        <div>
            <div>
            <h1>Exo1-1</h1>
                <button onClick={handleClick}>ClickMe</button>
                {isClicked && <p>Clicked</p>}
            </div>
            <div>
                <h1>Exo1-2</h1>
                <button onClick={handleClick2}>Toggle Me</button>
                <p>{getMessage()}</p>
            </div>
            <div>
                <h1>Exo1-3</h1>
                <button onClick={() => handleButtonClick(1)}>Button1</button>
                <button onClick={() => handleButtonClick(2)}>Button2</button>
                <button onClick={() => handleButtonClick(3)}>Button3</button>
                <p>{clickedButton ? `Button #${clickedButton} was clicked` : 'No button clicked'}</p>
            </div>
            <div>
                <h1>Exo1-4</h1>
                <h1>Counter: {count}</h1>
                <button onClick={handleIncrement}>Inc</button>
                <button onClick={handleDecrement}>Dec</button>
            </div>
            <div>
                <h1>Exo2-1</h1>
                <ul>
                    {tab.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h1>Exo2-2</h1>
                <ul>
                    {tab.map((item, index) => (
                        <li key={index}>Element {index} is:{item}</li>
                    ))}
                </ul>
            </div>
            <div>
            <h1>Exo2-3</h1>
                <ul>
                    {tab2.map((item, index) => (
                        <li key={index} onClick={() => handleItemClick(index)}>
                            Element {index} is:{item}
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
        
    );
};

export default ClickMeButton1