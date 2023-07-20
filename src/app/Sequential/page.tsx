import React from 'react'

type Book = {
    available: boolean,
    id: number,
    name: string,
    type: string,

}


async function Fiction() {
    const responce = await fetch("https://simple-books-api.glitch.me/books?type=fiction",{
        cache:"no-store",
    });
    const data = responce.json();
    return data;
}
async function NonFiction() {
    const responce = await fetch("https://simple-books-api.glitch.me/books?type=non-fiction",{
        cache:"no-store",
    });
    const data = responce.json();
    return data;
}



export default async function Parallel() {
    const fictionBooks=await Fiction();
 const nonFictionBooks =await NonFiction();
 

  return (
    <div>
<h1>Friction Book</h1>
<ul>
{fictionBooks.map((book:Book)=>
    <li key={book.id}>;
{book.name}
    </li>
)}

</ul>
<h1>Nonfriction Book</h1>
<ul>
{nonFictionBooks.map((book:Book)=>
    <li key={book.id}>;
{book.name}
    </li>
)}

</ul>

    </div>
  )
}

