import React, { useState } from "react";

export const ListCategories = () => {
  const [categories, setCategories] = useState(['first category']);
  const [category, setCategory] = useState('');

  const onAddCategory = () => {
    if (category.trim() !== '') {
      setCategories([...categories, category]);
      setCategory('');
    }
  };

  const onSetCategory = (evt) => {
    setCategory(evt.target.value);
  };

  return (
    <>
      <h1>ListCategories</h1>
      <input type="text" value={category} onChange={onSetCategory} />
      <button onClick={onAddCategory}>Add Category</button>
      <ol>
        {categories.map((category, key) => (
          <li key={key}>{category}</li>
        ))}
      </ol>
    </>
  );
};
export default ListCategories;