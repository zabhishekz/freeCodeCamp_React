import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX258_BO1,204,203,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    img: "https://images-eu.ssl-images-amazon.com/images/I/510g8NLbpNL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Our Class is a Family",
    author: "Shannon Olsen",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41EzNnr4YUL._SY264_BO1,204,203,200_QL40_ML2_.jpg",
    title: "The Vanishing Half",
    author: "Brit Bennett",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
