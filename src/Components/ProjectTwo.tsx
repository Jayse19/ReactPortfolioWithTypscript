import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CatFacts from './CatFactsQuery';


const Project2 = (props: any) => {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    })
    return (
        <QueryClientProvider client = {client}>
            <p>{props.show ? <CatFacts /> : ""}</p>
        </QueryClientProvider>
    );
}

export default Project2;