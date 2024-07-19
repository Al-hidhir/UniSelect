import React from "react";
import CourseItem from "./CourseItem";
import "./CourseList.css";

interface Course {
  name: string;
  subCourses: string[];
}

const courses: Course[] = [
  {
    name: "Computer Science",
    subCourses: [
      "IT",
      "Database Engineering",
      "Software Development",
      "Cybersecurity",
    ],
  },
  {
    name: "Business",
    subCourses: ["Marketing", "Finance", "Human Resources", "Management"],
  },
  {
    name: "Engineering",
    subCourses: [
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Chemical Engineering",
    ],
  },
  // Add more courses as needed
];

const CourseList: React.FC = () => {
  return (
    <div className="container">
      <div className="course-list">
        {courses.map((course, index) => (
          <CourseItem key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
