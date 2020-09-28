import React from 'react'

import {employees} from './EmployeeData'

class EmployeeList extends React.Component{
    constructor(props){
        super(props)
        {
            this.state = {
                employees: employees
            }
        }
    }
    render(){
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <table className="table table-hover table-center table-success table-striped">
                            <thead className="bg-success">
                                <tr>
                                    <th>Id</th>
                                    <th>Employee Photo</th>
                                    <th>Employee First Name</th>
                                    <th>Employee Last Name</th>
                                    <th>Employee Age</th>
                                    <th>Employee Phone Number</th>
                                    <th>Address</th>
                                    <th>gender</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.employees.map((employees, index) =>{
                                    debugger
                                    return(
                                      <tr>
                                          <td>{index + 1}</td>
                                          <td>
                                              <img src={employees.picture.large} alt="person Image" width="70" height="70" className="text-center" />
                                          </td>
                                          <td>{employees.firstName}</td>
                                          <td>{employees.lastName}</td>
                                          <td>{employees.age} Yrs</td>
                                          <td>{employees.phoneNumbers.number}</td>
                                          <td>{employees.address.state}</td>
                                          <td>{employees.gender}</td>

                                      </tr>
                                    );
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeeList;
