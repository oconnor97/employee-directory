import React from 'react';
import EmployeeData from '../EmployeeData/index';
import Search from '../Search/index';
import API from '../../utils/API';


const Table = () => {
    return (
        <div>
            <Search />
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <EmployeeData />
                </tbody>
            </table>
        </div>
    )
}

export default Table
