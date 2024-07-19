import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './courseView.css'; 

const CourseList = ({ courses, onDelete }) => {
  return (
    <div className="course-list">
      <h2>Course List</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} className="course-item">
            {course.name}
            <button
              className="delete-btn"
              onClick={() => onDelete(course.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
