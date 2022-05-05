import React, { Component } from "react";
import EmployeeService from "../../../services/EmployeeService";
class DeleteEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };

    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== id
        ),
      });
    });
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
                      onClick={() => this.deleteEmployee(employee.id)}
                      className="btn btn-danger"
                    >
                      Delete
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
export default DeleteEmployee;
