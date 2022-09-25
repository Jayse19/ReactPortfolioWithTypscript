import { Button, Grid } from "@mui/material"
import { useReducer } from "react"

type CounterState = {
    count: number
}
type CounterAction = {
    type: string
    numChange: number
}

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.numChange }
        case 'decrement':
            return { count: state.count - action.numChange }
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            Count: {state.count}
            <Grid container direction="row" justifyContent="space-evenly" alignItems="flex-end">
                <Button variant="contained" style={{ backgroundColor: "Blue" }} onClick={() => dispatch({ type: 'increment', numChange: 1 })}> Add </Button>
                <Button variant="contained" style={{ backgroundColor: "Red" }} onClick={() => dispatch({ type: 'decrement', numChange: 1 })}> Subtract </Button>
            </Grid>
        </div >
    );
}

export default Counter;