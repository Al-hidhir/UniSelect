import React, { useState, useEffect } from 'react';
import { fetchUniversities, fetchCourses, fetchUsers, addUniversity, addCourse, deleteUniversity, deleteCourse, deleteUser } from '../../api';
import UniversityList from '../../component/uniList/uniList';
import CourseList from '../../component/courseView/courseView';
import UserList from '../../component/usersList/userList';
import AddUniversity from '../AddUni/AddUni';
import AddCourse from '../addCourse/addCourse';
import './admin.css';

const AdminDashboard = ({ token }) => {
  const [universities, setUniversities] = useState([]);
  const [courses, setCourses] = useState([]);
  const [users, setUsers] = useState([]);
  const [universityName, setUniversityName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [universityData, courseData, userData] = await Promise.all([
          fetchUniversities(token),
          fetchCourses(token),
          fetchUsers(token),
        ]);

        setUniversities(universityData.data);
        setCourses(courseData.data);
        setUsers(userData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [token]);

  const handleAddUniversity = async (e) => {
    e.preventDefault(); // Ensure this line is present to prevent default form submission behavior
    try {
      await addUniversity({ name: universityName }, token);
      const updatedUniversities = await fetchUniversities(token);
      setUniversities(updatedUniversities.data);
      setUniversityName('');
    } catch (error) {
      console.error('Error adding university:', error);
    }
  };
  const handleAddCourse = async () => {
    try {
      await addCourse({ name: courseName, university_id: selectedUniversity }, token);
      const updatedCourses = await fetchCourses(token);
      setCourses(updatedCourses.data);
      setCourseName('');
      setSelectedUniversity('');
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const handleDeleteUniversity = async (id) => {
    if (window.confirm('Are you sure you want to delete this university?')) {
      try {
        await deleteUniversity(id, token);
        const updatedUniversities = await fetchUniversities(token);
        setUniversities(updatedUniversities.data);
      } catch (error) {
        console.error('Error deleting university:', error);
      }
    }
  };

  const handleDeleteCourse = async (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        await deleteCourse(id, token);
        const updatedCourses = await fetchCourses(token);
        setCourses(updatedCourses.data);
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    }
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(id, token);
        const updatedUsers = await fetchUsers(token);
        setUsers(updatedUsers.data);
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <UniversityList
        universities={universities}
        onDelete={handleDeleteUniversity}
      />
      <AddUniversity
        universityName={universityName}
        setUniversityName={setUniversityName}
        handleAddUniversity={handleAddUniversity}
      />
      <CourseList
        courses={courses}
        onDelete={handleDeleteCourse}
      />
      <AddCourse
        courseName={courseName}
        setCourseName={setCourseName}
        selectedUniversity={selectedUniversity}
        setSelectedUniversity={setSelectedUniversity}
        handleAddCourse={handleAddCourse}
        universities={universities}
      />
      <UserList
        users={users}
        onDelete={handleDeleteUser}
      />
    </div>
  );
};

export default AdminDashboard;
