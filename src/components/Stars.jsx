import React from 'react';
import shortid from 'shortid';
import Star from './Star';

const Stars = ({ count }) => {
  const condition = typeof count === 'number' && count >= 1 && count <= 5;

  const renderStars = count => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(
        <li key={shortid.generate()}>
          <Star />
        </li>,
      );
    }
    return arr;
  };

  return (
    <ul className="card-body-stars u-clearfix">
      {condition ? renderStars(count) : null}
    </ul>
  );
};

Stars.defaultProps = {
  count: 0,
};

export default Stars;
