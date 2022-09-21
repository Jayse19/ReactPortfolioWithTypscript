import { Button } from '@mui/material';
import React from 'react';

const Project1 = (props: any) => {

    const [number, setNumber] = React.useState(0)
    const handleClick = () => setNumber(number + 1)
    React.useEffect(() => {
        document.title = 'You clicked the button ' + number + ' times'
    }, [])
    return ( 
        <>
        <p>{props.show ? <Button variant="contained" onClick={handleClick}> Click me and check the browser name</Button>: ""}</p>
        <p>{number}</p>
        </>
     );
}
 
export default Project1;