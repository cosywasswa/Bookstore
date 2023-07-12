import React from 'react';

function BookForm() {
  return (
    <div>
      <h2 className="form-tittle">ADD NEW BOOK</h2>
      <form className="book-form">
        <input type="text" id="input-tittle" placeholder="Book tittle" />
        <input type="text" id="input-author" placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookForm;
