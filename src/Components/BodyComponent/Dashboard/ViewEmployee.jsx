import React, { Component } from "react";
import EmployeeService from "../../../services/EmployeeService";
class ViewEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.editEmployee = this.editEmployee.bind(this);
  }

  viewEmployee(id) {
    this.props.history.push(`/viewEmployee/${id}`);
  }

  editEmployee(id) {
    this.props.history.push(`/updateEmployee/${id}`);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered border-primary">
            <thead>
              <tr className="table-primary table-bordered border-primary ">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th>Password</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Department</th>
                <th>Campus</th>
                <th>Designation</th>
                <th>Contact no.</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td> {employee.firstName} </td>
                  <td> {employee.lastName} </td>
                  <td> {employee.emailId} </td>
                  <td> {employee.password} </td>
                  <td> {employee.dob} </td>
                  <td> {employee.gender} </td>
                  <td> {employee.dept} </td>
                  <td> {employee.campus} </td>
                  <td> {employee.designation} </td>
                  <td> {employee.contactno} </td>
                  <td> {employee.address} </td>
                  <td>
                    <button
                      onClick={() => this.editEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      Update
                    </button>

                    <button
                      onClick={() => this.viewEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ViewEmployee;
