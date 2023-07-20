"use client";

import React from 'react'
import useSWR from 'swr'

type Book = {
    available: boolean,
    id: number,
    name: string,
    type: string,

}

const url = "https://api.quotable.io/random?tags=technology";

const fetcher = (url:string)=> fetch(url).then((res) => res.json());

export default  function ClientPage() {
  const {data,error,isLoading} = useSWR(url,fetcher)
  if(error)  return <div>Error</div>
  if(isLoading)  return <div>Loading</div>
     return (
        <div>
            <h1>Client Page</h1>
           {data.content}          
        </div>
    );
};
