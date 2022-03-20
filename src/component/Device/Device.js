import React from 'react';
import Other from '../Other/Other';

const Device = (props) => {
    return (
        <div>
            <h1>hallo world :{props.name}</h1>
            <Other name={'hasan'}></Other>
        </div>
    );
};

export default Device;