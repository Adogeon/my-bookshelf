import React from "react";
import { useParams } from "react-router-dom";

const BookDetail = (props) => {
  const { bookId } = useParams("bookId");

  return <div>This is detail page for {bookId}</div>;
};

export default BookDetail;
