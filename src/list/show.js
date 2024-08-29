import React, { useState, useCallback } from 'react';
import InfiniteScroll from './index';
import './InfiniteScroll.css'

const List = () => {
  const [count, setCount] = useState(8);

  const load = () => {
    setCount((prevCount) => prevCount + 2);
  };

  return (
    <InfiniteScroll onLoad={load}>
      <ul className="infinite-list">
        {Array.from({ length: count }, (_, i) => (
          <li key={i} className="infinite-list-item">
            <div className='top'>{i + 1}</div>
          </li>
        ))}
      </ul>
    </InfiniteScroll>
  );
};

export default List;