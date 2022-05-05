import React from "react";
import web from "../Dashboard/blogger.png";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 my-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column    ">
                  <h1>
                    Welcome to{" "}
                    <strong className="brand-name">Admin DashBoard</strong>
                  </h1>
                  <h2 className="my-3">
                    Financial Resources may be the lifeblood of a company but
                    human resources are the brains...
                  </h2>
                  <h2 className="">
                    "Human Resources isn't a thing we do. It's the thing that
                    runs our business."
                  </h2>
                </div>
                <div className="mt-3">
                  <NavLink to="/addEmployee" className="btn-get-started">
                    Add Employee
                  </NavLink>
                </div>
                <div className="col-lg-5 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Dashboard;
