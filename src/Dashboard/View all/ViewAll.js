// StudentList.js
import React, { useState } from 'react';
import "./style.css"
import Pagination from './Pagination';
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const ViewAll = ({ Students, handleDelete, handleEdit }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setrowsPerPage] = useState(7);

    const lastPageIndex = currentPage * rowsPerPage;
    const firstPageIndex = lastPageIndex - rowsPerPage;

    const CurrentStudentData = Students.slice(firstPageIndex, lastPageIndex);
    console.log(currentPage)
    console.log(firstPageIndex)
    console.log(lastPageIndex)
    console.log(CurrentStudentData)

    return (
        <div >
            <div className="d-flex align-items-center justify-content-center table-stu">
                <table style={{ width: "100%" }} className="table">
                    <thead className='table-dark'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Pincode</th>
                            <th>Score</th>
                            <th>Result</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody >
                        {CurrentStudentData.map(Student => (
                            <tr key={Student.id} >
                                <td><CgProfile /></td>
                                <td>{Student.name}</td>
                                <td>{Student.address}</td>
                                <td>{Student.city}</td>
                                <td>{Student.country}</td>
                                <td>{Student.pincode}</td>
                                <td>{Student.score}</td>
                                <td style={{ backgroundColor: Student.score / 1600 >= 0.3 ? "#66f2a0" : "#ff6b6b" }}>
                                    {Student.score / 1600 >= 0.3 ? "pass" : "fail"}
                                </td>


                                <td>
                                    <b style={{ margin: "0px 50px 0px 0" }} onClick={() => handleEdit(Student.id)}><MdModeEditOutline /></b>
                                    <b onClick={() => handleDelete(Student.id)}><MdDelete /></b>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination totalRows={Students.length} rowsPerPage={rowsPerPage} setCurrentPage={setCurrentPage} CurrentPage={currentPage} />
        </div>
    );
};

export default ViewAll;
