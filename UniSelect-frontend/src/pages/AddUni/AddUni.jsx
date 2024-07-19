import React from 'react';

const AddUniversity = ({ universityName, setUniversityName, handleAddUniversity }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    handleAddUniversity(e); 
  };

  return (
    <form onSubmit={handleSubmit} className='add-university-form'>
      <h2>Add University</h2>
      <input
        type="text"
        value={universityName}
        onChange={(e) => setUniversityName(e.target.value)}
        placeholder="University Name"
        required
      />
      <button type="submit">Add University</button>
    </form>
  );
};

export default AddUniversity;
