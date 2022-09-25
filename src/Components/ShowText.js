import { Button, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useState } from "react";
import DemoOutput from "./Demo/DemoOutput";

const ShowInfo = () => {
    const [showInfo, setShowInfo] = useState(false)
    const [allowToggle, setAllowToggle] = useState(false)

    const toggleInfoHandler = useCallback(() => {
        if (allowToggle) {
            setShowInfo((prevShowInfo) => !prevShowInfo)
        }
    }, [allowToggle])

    const allowToggleHandler = () => {
        setAllowToggle(true)
    }
    return (
        <div>
            <Paper>
                <DemoOutput show={showInfo} />
            </Paper>
            <Grid container direction="row" justifyContent="Center" allignItems="center">
                <Button onClick={allowToggleHandler} variant="contained" style={{ backgroundColor: "black" }}> Allow Info to be shown or Hidden</Button>
            </Grid>
            <Grid>
                <Button onClick={toggleInfoHandler} variant="contained" style={{ backgroundColor: "black" }}>Show/Hide Info</Button>
            </Grid>
        </div>
    );
}

export default ShowInfo;