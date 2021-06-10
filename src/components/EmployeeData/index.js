import React from 'react'

const EmployeeData = (props) => {
    const employeeInfo = props.employeeState
    return (
        employeeInfo.map((employee) =>
            <tr key={employee.id.value || employee.name.first}>
                <th scope="row"><img alt={employee.name.first} src={employee.picture.thumbnail}></img></th>
                <td>{employee.name.first} {employee.name.last}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.dob.date}</td>
            </tr>
        )
    )
}

export default EmployeeData
