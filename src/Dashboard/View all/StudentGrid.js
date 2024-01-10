import React, { useState } from 'react';
import { StudentList } from './data';
import ViewAll from './ViewAll';
import StudentForm from './StudentForm';

const StudentGrid = () => {
  const [Students, setStudents] = useState(StudentList);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [popData, setpopData] = useState(false);

  const handleDelete = id => {
    setStudents(prevStudents => prevStudents.filter(Student => Student.id !== id));
    
  };

  const handleEdit = id => {
    const selectedStudent = Students.find(Student => Student.id === id);
    setSelectedStudent({ ...selectedStudent });
    setpopData(true)
  };

  const handleFormSubmit = formData => {
    if (selectedStudent) {
      // Update existing Student
      setStudents(prevStudents =>
        prevStudents.map(Student => (Student.id === selectedStudent.id ? { ...Student, ...formData } : Student))
      );
      setpopData(false);
      setSelectedStudent(null);
    } else {
      // Add new Student
      setStudents(prevStudents => [...prevStudents, { ...formData, id: Date.now() }]);
    }
  };

  return (
    <div>
      <StudentForm handleSubmit={handleFormSubmit} initialValues={selectedStudent} popUp={popData}/>
      <ViewAll Students={Students} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
};

export default StudentGrid;
