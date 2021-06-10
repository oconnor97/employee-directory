import React, { useState, useEffect } from 'react';
import EmployeeData from '../EmployeeData/index';
import Search from '../Search/index';
import API from '../../utils/API';


const Table = () => {

    const [employeeState, setEmployeeState] = useState([]);
    const [filteredState, setFilteredState] = useState([]);

    useEffect(() => {
        const loadEmployees = () => {
            API.getEmployee()
                .then((res) => {
                    allEmployees = res.data.results;
                    setFilteredState(allEmployees);
                    setEmployeeState(allEmployees)
                    console.log(allEmployees)
                })
                .catch(err => console.error(err));
        }
        loadEmployees()

    }, []);

    const handleSearch = (input) => {
        setFilteredState(employeeState.filter((employee) => {
            return employee.name.first.toLowerCase().includes(input.toLowerCase()) ||
                employee.name.last.toLowerCase().includes(input.toLowerCase()) ||
                employee.phone.includes(input.toLowerCase()) ||
                employee.email.toLowerCase().includes(input.toLowerCase()) ||
                employee.dob.date.includes(input.toLowerCase())
        }))
    }


    let allEmployees;



    return (
        <div>
            <Search handleSearch={handleSearch} />
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Image <i className="fas fa-angle-down" style={{ color: 'red' }} ></i></th>
                        <th scope="col">Name <i className="fas fa-angle-down" style={{ color: 'red' }}></i></th>
                        <th scope="col">Phone <i className="fas fa-angle-down" style={{ color: 'red' }}></i></th>
                        <th scope="col">Email <i className="fas fa-angle-down" style={{ color: 'red' }}></i></th>
                        <th scope="col">DOB <i className="fas fa-angle-down" style={{ color: 'red' }}></i></th>
                    </tr>
                </thead>
                <tbody>
                    <EmployeeData employeeState={filteredState} />
                </tbody>
            </table>
        </div>
    )
}

export default Table
