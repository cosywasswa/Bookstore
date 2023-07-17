import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookForm from './BookForm';
import Book from './Book';

function Books() {
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.booksList);
  return (
    <>
      <ul className="list">
        {books.map((book) => <Book key={book.item_id} {...book} />)}
      </ul>
      <BookForm />
    </>
  );
}

export default Books;
