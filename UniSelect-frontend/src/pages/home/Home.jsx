// src/pages/home/Home.js
import React, { useEffect, useState } from 'react';
import UniversitySearch from '../../component/uniSearch/UniversitySearch';
import CourseList from '../../component/courseList/CourseList';
import { fetchUniversities, fetchCourses } from '../../api';
import './Home.css';

const Home = () => {
  const [universities, setUniversities] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const uniResponse = await fetchUniversities();
        const courseResponse = await fetchCourses();
        setUniversities(uniResponse.data);
        setCourses(courseResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <div>
        <UniversitySearch universities={universities} />
      </div>
      <div className="para">
        <h2>Not sure what you want to study?</h2>
        <p>Don't worry this is the courses that have big industry in Tanzania</p>
      </div>
      <div>
        <CourseList courses={courses} />
      </div>
    </div>
  );
};

export default Home;

