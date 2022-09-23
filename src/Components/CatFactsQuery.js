import { Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";

const CatFacts = () => {
    const { data: catData, isLoading, isError, refetch } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    })

    if(isError) {
        <h1> Sorry there was an error</h1>
    }

    if(isLoading) {
        <h1> Loading.......</h1>
    }
    return ( 
        <div>
            <p>{catData?.fact}</p>
            <Button onClick = {refetch}variant="contained" style={{ backgroundColor: "black" }}>Update Fact</Button>
        </div>
     );
}

export default CatFacts;