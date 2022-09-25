import React from 'react';
import UseRefExample from './UseRefExample';

const Project3 = (props: any) => {
    return (
        <div>
            <p>{props.show ? <UseRefExample /> : ""}</p>
        </div>
    );
}

export default Project3;