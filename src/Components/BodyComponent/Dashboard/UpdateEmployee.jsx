import React, { Component } from "react";

import EmployeeService from "../../../services/EmployeeService";

class UpdateEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
      dob: "",
      gender: "",
      dept: "",
      campus: "",
      designation: "",
      contactno: "",
      address: "",
    };
    this.changefirstNameHandler = this.changefirstNameHandler.bind(this);
    this.changelastNameHandler = this.changelastNameHandler.bind(this);
    this.changeemailIdHandler = this.changeemailIdHandler.bind(this);
    this.changepasswordHandler = this.changepasswordHandler.bind(this);
    this.changedobHandler = this.changedobHandler.bind(this);
    this.changegenderHandler = this.changegenderHandler.bind(this);
    this.changedeptHandler = this.changedeptHandler.bind(this);
    this.changecampusHandler = this.changecampusHandler.bind(this);
    this.changedesignationHandler = this.changedesignationHandler.bind(this);
    this.changecontactnoHandler = this.changecontactnoHandler.bind(this);
    this.changeaddressHandler = this.changeaddressHandler.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
  }
  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      let employee = res.data;
      this.setState({
        firstName: employee.firstName,
        lastName: employee.lastName,
        emailId: employee.emailId,
        password: employee.password,
        dob: employee.dob,
        gender: employee.gender,
        dept: employee.dept,
        campus: employee.campus,
        designation: employee.designation,
        contactno: employee.contactno,
        address: employee.address,
      });
    });
  }

  updateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      password: this.state.password,
      dob: this.state.dob,
      gender: this.state.gender,
      dept: this.state.dept,
      campus: this.state.campus,
      designation: this.state.designation,
      contactno: this.state.contactno,
      address: this.state.address,
    };

    console.log("employee =>  " + JSON.stringify(employee));
    alert("Data Updated");
    EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
      this.props.history.push("/employees");
    });
  };

  changefirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changelastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeemailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };
  changepasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  changedobHandler = (event) => {
    this.setState({ dob: event.target.value });
  };
  changegenderHandler = (event) => {
    this.setState({ gender: event.target.value });
  };
  changedeptHandler = (event) => {
    this.setState({ dept: event.target.value });
  };
  changecampusHandler = (event) => {
    this.setState({ campus: event.target.value });
  };
  changedesignationHandler = (event) => {
    this.setState({ designation: event.target.value });
  };
  changecontactnoHandler = (event) => {
    this.setState({ contactno: event.target.value });
  };
  changeaddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card w-75 col-md-6  offset-md-1">
              <h3 className="text-center" style={{ marginTop: "10px" }}>
                <b>Update Employee</b>
              </h3>
              <div className="card-body">
                <form>
                  <div className="form-inline">
                    <label style={{ textAlign: "right" }}>First Name:</label>
                    <input
                      placeholder="Enter first Name"
                      className="form-control"
                      required
                      value={this.state.firstName}
                      onChange={this.changefirstNameHandler}
                    ></input>
                  </div>

                  <div className="form-group">
                    <label>Last Name:</label>
                    <input
                      placeholder="Enter Last Name"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changelastNameHandler}
                    ></input>
                  </div>

                  <div className="form-group">
                    <label>Email Id:</label>
                    <input
                      type="email"
                      placeholder="Enter Email-Id"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeemailIdHandler}
                    ></input>
                  </div>

                  <div className="form-group">
                    <label>Password:</label>
                    <input
                      placeholder="Set Password"
                      className="form-control"
                      aria-describedby="passwordHelpInline"
                      value={this.state.password}
                      onChange={this.changepasswordHandler}
                    ></input>
                  </div>
                  <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">
                      Must be 8-20 characters long.
                    </span>
                  </div>

                  <div
                    className="form-group, col-5"
                    onChange={this.changedobHandler}
                  >
                    <label>Date of Birth:</label>
                    <input
                      type="date"
                      placeholder="Enter Date of Birth"
                      className="form-control"
                      value={this.state.dob}
                    ></input>
                  </div>

                  <div className="form-group">
                    <label>Gender:</label>
                    <input
                      onChange={this.changegenderHandler}
                      value={this.state.gender}
                      
                      className="form-control"
                      
                    />
                  </div>

                  <div className="form-group">
                    <label>Department:</label>
                    <input
                      placeholder="Enter department"
                      className="form-control"
                      value={this.state.dept}
                      onChange={this.changedeptHandler}
                    ></input>
                  </div>

                  <div
                    className="form-group"
                    onChange={this.changecampusHandler}
                    value={this.state.campus}
                  >
                    <label>Campus:</label>
                    <select style={{ marginLeft: "20px", marginTop: "10px" }}>
                      <option value="Paralakhemundi" name="campus">
                        Paralakhemundi
                      </option>
                      <option value="Bhubneshwar" name="campus">
                        Bhubneshwar
                      </option>
                      <option value="Balangir" name="campus">
                        {" "}
                        Balangir
                      </option>
                      <option value="Rayagada" name="campus">
                        {" "}
                        Rayagada
                      </option>
                      <option value="Balasore" name="campus">
                        {" "}
                        Balasore
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Designation:</label>
                    <input
                      placeholder="Enter Designation"
                      className="form-control"
                      value={this.state.designation}
                      onChange={this.changedesignationHandler}
                    ></input>
                  </div>

                  <div className="form-group">
                    <label>Contact No:</label>
                    <input
                      placeholder="Enter contact no."
                      className="form-control"
                      value={this.state.contactno}
                      onChange={this.changecontactnoHandler}
                    ></input>
                  </div>

                  <div className="form-group">
                    <label>Address:</label>
                    <input
                      placeholder="Enter Address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.changeaddressHandler}
                    ></input>
                  </div>
                  <button
                    className="btn btn-success mt-1"
                    onClick={this.updateEmployee}
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UpdateEmployee;
