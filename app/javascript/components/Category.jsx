import React from 'react';

const Category = ({ isOver, children }) => {
  const className = isOver ? "highlight-region" : "";

  return (
    <div className={`col ${className}`}>
      {children}
    </div>
  );
}

export default Category;
