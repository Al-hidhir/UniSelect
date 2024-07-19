import React from 'react';
import './addCourse.css';

const AddCourse = ({ courseName, setCourseName, selectedUniversity, setSelectedUniversity, handleAddCourse, universities }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    handleAddCourse();
  };

  return (
    <form className="add-course-form" onSubmit={handleSubmit}>
      <h2>Add Course</h2>
      <input
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        placeholder="Course Name"
        required
      />
      <select
        value={selectedUniversity}
        onChange={(e) => setSelectedUniversity(e.target.value)}
        required
      >
        <option value="">Select University</option>
        {universities.map((uni) => (
          <option key={uni.id} value={uni.id}>{uni.name}</option>
        ))}
      </select>
      <button type="submit">Add Course</button>
    </form>
  );
};

export default AddCourse;
