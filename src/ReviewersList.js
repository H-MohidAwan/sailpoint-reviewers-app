// ReviewersList.js
import React from 'react';

const ReviewersList = ({ reviewers }) => {
  return (
    <ul>
      {reviewers.map((reviewer) => (
        <li key={reviewer.id}>
          Name: {reviewer.name}, ID: {reviewer.id}
        </li>
      ))}
    </ul>
  );
};

export default ReviewersList;
