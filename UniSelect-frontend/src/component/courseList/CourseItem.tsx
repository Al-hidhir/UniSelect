import React, { useState } from "react";

interface CourseItemProps {
  course: {
    name: string;
    subCourses: string[];
  };
}

const CourseItem: React.FC<CourseItemProps> = ({ course }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="course-item">
      <div className="course-header" onClick={toggleExpansion}>
        <h3>{course.name}</h3>
        <button>{isExpanded ? "▲" : "▼"}</button>
      </div>
      {isExpanded && (
        <ul className="sub-course-list">
          {course.subCourses.map((subCourse, index) => (
            <li key={index}>{subCourse}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseItem;
