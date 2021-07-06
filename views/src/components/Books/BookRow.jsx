import React from "react";
import { Link } from "react-router-dom";
//style import
import layout from "../../styles/row.css";
import styles from "./BookRow.css";

const BookRow = (props) => {
  return (
    <Link to={`/book/${props.bookId}`} className={`${layout["col-2"]}`}>
      <div className={` ${styles["book-card"]}`}>
        <span>
          <img className={`${styles[`book-img`]}`} src={props.img} />
        </span>
        <span className={`${layout[`col-9`]}`}>{props.title}</span>
      </div>
    </Link>
  );
};

export default BookRow;
