import React from 'react';
import RetreatCard from './RetreatCard';

const RetreatList = ({ retreats }) => {
  return (
    <div>
      {retreats.map(retreat => (
        <RetreatCard key={retreat.id} retreat={retreat} />
      ))}
    </div>
  );
};

export default RetreatList;
