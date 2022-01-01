import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = "Amelia Hepworth";
const Book = () => {
  const title = "I Love You to the Moon and Back";
  return (
    <article className="book">
      <img src="https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX258_BO1,204,203,200_.jpg" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{6 + 6}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
