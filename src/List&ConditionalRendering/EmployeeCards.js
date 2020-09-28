import React from 'react'

import {employees} from './EmployeeData'

class EmployeeCards extends React.Component {
    constructor(props) {
        super(props)
        {
            this.state = {
                employees: employees,
                option: "",
                FilteredEmployees: [],
                searchQuery: ""
            }
        }
    }

    updateInput = (e) => {
        let selectedEmployees = [];
        this.setState({
            ...employees,
            option: e.target.value,
        })
        switch (e.target.value) {
            case "male":
                let maleEmployees = this.state.employees.filter(employees => employees.gender === "male");
                this.setState({
                    ...employees,
                    option: e.target.value,
                    FilteredEmployees: maleEmployees
                })
                return;
            case "female":
                let femaleEmployees = this.state.employees.filter(employees => employees.gender === "female");
                this.setState({
                    ...employees,
                    option: e.target.value,
                    FilteredEmployees: femaleEmployees
                })
                return;
            default :
                let allEmployees = this.state.employees.filter(employees => employees);
                this.setState({
                    ...employees,
                    option: e.target.value,
                    FilteredEmployees: allEmployees
                })
                return;
        }
    }
    updateSearch = (e) => {
    debugger
        this.setState({
            ...this.state,
            searchQuery: e.target.value
        })

        let theQuery = e.target.value;
        let searchedEmployees = this.state.FilteredEmployees;
        if (theQuery != "") {
            searchedEmployees = this.state.FilteredEmployees.filter((employees) => {
                return employees.firstName.toLowerCase().trim().startsWith(theQuery.toLowerCase().trim())
            });
            this.setState({
                ...this.state,
                searchQuery: e.target.value,
                FilteredEmployees: searchedEmployees
            });
        } else {
            this.setState({
                ...this.state,
                searchQuery: e.target.value,
                FilteredEmployees: employees
            });
        }
        this.setState({
            ...this.state,
            searchQuery: e.target.value,
            FilteredEmployees: employees
        });

    }

    render() {
        return (

            <div className="container mt-3">
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="card col-md-12">
                        <div className="card-body text-center">
                            <form>
                                <div className="custom-control custom-control-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                           id="inlineRadio1" value="All" onChange={this.updateInput}/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">All Employees</label>
                                </div>
                                <div className="custom-control custom-control-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                           id="inlineRadio2" value="male" onChange={this.updateInput}/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Male Employees</label>
                                </div>
                                <div className="custom-control custom-control-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                           id="inlineRadio3" value="female" onChange={this.updateInput}/>
                                    <label className="form-check-label" htmlFor="inlineRadio3">Female Employees</label>
                                </div>
                                <div className="form-group mt-2 col-md-12">
                                    <input
                                        name="searchQuery"
                                        value={this.state.searchQuery}
                                        onChange={this.updateSearch}
                                        type="text"
                                        className="form-control"
                                        placeholder="Search User"/>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Total employees : {this.state.employees.length}</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.FilteredEmployees.map((employees, index) => {
                            return (
                                <div className="col-md-4 mt-2">
                                    <div className="card">
                                        <div className="card-header bg-success text-white">
                                            <p className="mb-0">{employees.firstName} {employees.lastName}</p>
                                        </div>
                                        <div className="card-body">
                                            <img src={employees.picture.large} alt="person Image" width="70" height="70"
                                                 className="text-center d-block m-auto"/>
                                            <ul className="list-group mt-2">
                                                <li className="list-group-item">{employees.age} Yrs</li>
                                                <li className="list-group-item">{employees.phoneNumbers.number}</li>
                                                <li className="list-group-item">{employees.address.state}</li>
                                                <li className="list-group-item">{employees.gender}</li>
                                            </ul>
                                        </div>
                                        <div className="card-footer">

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default EmployeeCards;
