import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookForm from './BookForm';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

function Books() {
  const dispatch = useDispatch();
  const { books, isLoading, isError } = useSelector((store) => store.booksList);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="error">
        <h1>Something went wrong...</h1>
      </div>
    );
  }
  return (
    <>
      <article className="article">
        {Object.entries(books).map(([id, book]) => (
          <Book
            key={id}
            id={id}
            title={book[0].title}
            author={book[0].author}
            category={book[0].category}
          />
        ))}
        <BookForm />
      </article>
    </>
  );
}

export default Books;
