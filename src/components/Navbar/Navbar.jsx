import React from 'react';
import { Link } from 'react-router-dom';
import books from '../../data/books'

const Navbar = () => {
  const listBooks = books.map((book) =>
  <li key={book}>
    <Link to={`/books/${book.slug}`}>{book.title}</Link>
  </li>
);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <ul>
        { listBooks }
      </ul>
    </nav>
  );
}
export default Navbar;
