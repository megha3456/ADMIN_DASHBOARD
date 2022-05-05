
import React, { Component } from 'react'
import EmployeeService from '../../../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor (props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}


        }
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({employee: res.data});
        })

    }
    render(){
        return(
            <div>
               <div className="card mx-auto">
                   <h2 className="text-center" style={{marginTop:"20px"}}>View Employee Details</h2>
                   <div className="card-body mx-auto">
                       <div className="" >
                           <h6>First Name: {this.state.employee.firstName}</h6>
                           
                       </div>

                       <div className="row">
                           <label>Last Name: {this.state.employee.lastName}</label>
                          
                       </div>

                       <div className="row">
                           <label>Email Id: {this.state.employee.emailId}</label>
                           <div>  </div>
                       </div>

                       <div className="row">
                           <label>Password: {this.state.employee.password}  </label>
                           
                       </div>

                       <div className="row">
                           <label>Date of Birth:  {this.state.employee.dob} </label>
                           
                       </div>

                       <div className="row">
                           <label>Gender: {this.state.employee.gender}</label>
                           
                       </div>

                       <div className="row">
                           <label>Department:  {this.state.employee.dept} </label>
                           
                       </div>

                       <div className="row">
                           <label>Campus: {this.state.employee.campus}</label>
                           
                       </div>

                       <div className="row">
                           <label>Designation: {this.state.employee.designation} </label>
                          
                       </div>

                       <div className="row">
                           <label>Contact No: {this.state.employee.contactno}</label>
                          
                       </div>

                       <div className="row">
                           <label>Address: {this.state.employee.address}</label>
                           
                       </div>

                   </div>

               </div>

            </div>
        )
    }
}
export default ViewEmployeeComponent
