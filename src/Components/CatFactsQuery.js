import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import  Axios from "axios";

const CatFacts = () => {
    const { data, isLoading, isError, refetch, error } = useQuery(["cat"], async () => {
        const res = await Axios.get("https://catfact.ninja/fact");
        return (res.data)
    })

    if(isError) {
       return (
       <p> {error.message}</p>
       )
    }

    if(isLoading) {
       return( <h1> Loading.......</h1>)
    }
    return ( 
        <div>
            <p>{data.fact}</p>
            <Button onClick = {refetch}variant="contained" style={{ backgroundColor: "black" }}>Update Fact</Button>
        </div>
     );
}

export default CatFacts