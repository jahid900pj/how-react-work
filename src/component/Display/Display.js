import React from 'react';
import Dail from '../Dail/Dail';

const Display = (props) => {
    return (
        <div>
            <h2>same number :{props.same}</h2>
            <Dail dail={props.same}></Dail>
        </div>
    );
};

export default Display;