import React, { useState } from 'react';
import Display from '../Display/Display';

const Doro = () => {
    const [dore, setDore] = useState(0)
    const countDore = () => {
        const newDore = dore + 1;
        setDore(newDore)
    }

    return (
        <div>
            <h2>Count Dore :{dore}</h2>
            <button onClick={countDore}> de dore..</button>
            <Display same={dore}></Display>
        </div>
    );
};

export default Doro;