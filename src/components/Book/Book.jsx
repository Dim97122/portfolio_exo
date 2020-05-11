import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import books from '../../data/books'


const Book = () => {
  let { bookSlug } = useParams();
  console.log(books);
  const [currentBook, setCurrentBook] = useState(null)

  useEffect(() => {
    setCurrentBook(books.find((book) => book === bookSlug));
    console.log(bookSlug);
  }, [])
  return (
    <>
      <div>
          { bookSlug }
      </div>
    </>
  );
}
export default Book;
