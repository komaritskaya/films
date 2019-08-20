import React from 'react';

function Tag({ title, color }) {
  return (
    <span className={`card-media-tag card-media-tag-${color}`}>{title}</span>
  );
}

export default Tag;
