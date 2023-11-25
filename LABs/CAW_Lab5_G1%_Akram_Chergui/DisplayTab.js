import React, { useState } from 'react';

const DisplayTab = ({ table }) => {
    const [tab, setTab] = useState(table);

    const handleItemClick = (index) => {
        setTab((prevTab) => {
            const newTab = [...prevTab];
            newTab.splice(index, 1);
            return newTab;
        });
    };

    return (
        <div>
            <ul>
                {tab.map((item, index) => (
                    <li key={index} onClick={() => handleItemClick(index)}>
                        Element {index} is:{item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayTab;
