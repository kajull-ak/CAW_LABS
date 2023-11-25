// src/App.js
import React from 'react';
import ClickMeButton1 from './ClickMeButton';
import DisplayTab from './DisplayTab';
import Userform from './userform';
import DynamicDivs from './DynamicDivs';

// import ClickMeButton2 from './ClickMeButton2';

const App = () => {
    const myTable = ["this", "is", "the", "new", "map"];
    const table1 = ["apple", "banana", "cherry", "date"];
    const table2 = ["elephant", "fox", "giraffe", "hippo"];
    return (
    
        <div>
            <div>
            <h1>My React App</h1>
            <ClickMeButton1 />
            <h1>Exo2-4</h1>
            <DisplayTab table={myTable} />
            </div>
            <h1>Exo2-5</h1>
            <div>
                <h2>Table 1</h2>
                <DisplayTab table={table1} />
            </div>

            <div>
                <h2>Table 2</h2>
                <DisplayTab table={table2} />
            </div>
            <div>
                <Userform />
            </div>
            <div>
                <DynamicDivs />
            </div>
        </div>
        
    
    );
};

export default App;
