import * as React from 'react';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Project1 from '../Components/ProjectOne';
import Project2 from '../Components/ProjectTwo';
import Project3 from '../Components/ProjectThree';
import { DocumentScannerTwoTone } from '@mui/icons-material';

const Projects = () => {

    const [showProjectOne, setShowProjectOne] = React.useState(false)
    const [showProjectTwo, setShowProjectTwo] = React.useState(false)
    const [showProjectThree, setShowProjectThree] = React.useState(false)

    const toggleProjectOneHandler = () => {
        setShowProjectOne((prevShowContent) => !prevShowContent)
        setShowProjectTwo(false)
        setShowProjectThree(false)
    }
    const toggleProjectTwoHandler = () => {
        setShowProjectTwo((prevShowContent) => !prevShowContent)
        setShowProjectOne(false)
        setShowProjectThree(false)
    }
    const toggleProjectThreeHandler = () => {
        setShowProjectThree((prevShowContent) => !prevShowContent)
        setShowProjectTwo(false)
        setShowProjectOne(false)
    }

    return (
        <div >
            <div style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                <h1>My Projects</h1>
            </div>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                <Button onClick={toggleProjectOneHandler} variant="contained" style={{ backgroundColor: "black" }}>Project1</Button>
                <Button onClick={toggleProjectTwoHandler} variant="contained" style={{ backgroundColor: "black" }}>Project2</Button>
                <Button onClick={toggleProjectThreeHandler} variant="contained" style={{ backgroundColor: "black" }}>Project3</Button>
            </Grid>
            <Project1 show ={showProjectOne}/>
            <Project2 show ={showProjectTwo}/>
            <Project3 show ={showProjectThree}/>
        </div>
    );
}

export default Projects;