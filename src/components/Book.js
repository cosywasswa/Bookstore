import PropTypes from 'prop-types';
import React from 'react';

function Book({ tittle, author }) {
  return (
    <li>
      <div className="book">
        <h3>{tittle}</h3>
        <p>{author}</p>
        <button type="button">Delete</button>
      </div>
    </li>
  );
}
export default Book;

Book.propTypes = {
  tittle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
