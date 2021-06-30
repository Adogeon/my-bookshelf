import React from "react";

import BookRow from "../components/Books/BookRow";

const data = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/91jBdaRVqML.jpg",
    title: "The Fellowship of the Ring",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/4123zOAwAgL.jpg",
    title: "The Two Towers",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/41KGl2FqeAL._SY346_.jpg",
    title: "The Return of the King",
  },
];

const BookPage = () => {
  return (
    <main>
      {data.map((book) => (
        <BookRow img={book.img} title={book.title} />
      ))}
    </main>
  );
};

export default BookPage;
