import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((store) => store.category.status);
  return (
    <>
      <div className="category-container">
        <h1>{status}</h1>
      </div>
    </>
  );
}

export default Categories;
