import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';

function Book({ item_id: id, title, author }) {
  const dispatch = useDispatch();
  return (
    <li>
      <div className="book">
        <h3>{title}</h3>
        <p>{author}</p>
        <Button
          type="button"
          onClick={() => dispatch(removeBook(id))}
          btnValue="Delete"
          btnName="remove"
        />
      </div>
    </li>
  );
}
export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
};
