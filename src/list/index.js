import React, { useEffect, useRef, useState } from 'react';
import './InfiniteScroll.css'

const InfiniteScroll = ({ onLoad, children, threshold = 0 }) => {
  const [isFetching, setIsFetching] = useState(false);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (
      containerRef.current ||
      containerRef.current.scrollHeight - containerRef.current.scrollTop <=
        containerRef.current.clientHeight + threshold
    )
     {
      setIsFetching(true);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  },
  [handleScroll]
  );

  useEffect(() => {
    if (isFetching)
    { onLoad();}
  }, [isFetching, onLoad]);

  return (
    <div ref={containerRef} style={{ overflow: 'auto' }}>
      {children}
      {isFetching}
    </div>
  );
};

export default InfiniteScroll;