import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './uniList.css'; // Import your CSS file if you have one

const UniversityList = ({ universities, onDelete }) => {
  return (
    <div className="university-list">
      <h2>University List</h2>
      <ul>
        {universities.map((university) => (
          <li key={university.id} className="university-item">
            {university.name}
            <button
              className="delete-btn"
              onClick={() => onDelete(university.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UniversityList;
