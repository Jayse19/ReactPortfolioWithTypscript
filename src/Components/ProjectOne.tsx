import { Button } from '@mui/material';
import React from 'react';
import Timer from './Timer';

const Project1 = (props: any) => {
    return ( 
        <>
        <p>{props.show ? <Timer />: ""}</p>
        </>
     );
}
 
export default React.memo(Project1);