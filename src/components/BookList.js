import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

function Books() {
  return (
    <>
      <ul className="list">
        <Book tittle="The rich Dad" author="Robert Kiosaki" />
        <Book tittle="Evicted" author="Matthew Desmond" />
        <Book tittle="Less is More" author="Jason Hickel" />
      </ul>
      <BookForm />
    </>
  );
}

export default Books;
