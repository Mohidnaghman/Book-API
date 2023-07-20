import React from 'react'

type Book = {
    available: boolean,
    id: number,
    name: string,
    type: string,

}

async function getPost() {
    const responce = await fetch("https://simple-books-api.glitch.me/books",{
        cache:"no-store",
    });
    const data = responce.json();
    return data;
}


export default async function StaticPage() {
    const books = await getPost();
    return (
        <div>
            <h1>Static Page</h1>
            {books.map((book: Book) => {
                <ul key={book.id}>
                    <li>
                        {book.name}  - {book.type} 
                    </li>
                </ul>
            })}
        </div>
    );
};
