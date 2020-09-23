import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./myProfile.less";

class MyProfile extends Component {
  state = {
    name: "",
    gender: "male",
    description: "",
    check: false,
  };

  handleFieldChange = (field, event) => {
    this.setState({
      [field]: event.target.value,
    });
  };

  handleCheckChange = () => {
    this.setState({
      check: !this.state.check,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
  };

  render() {
    return (
      <div className="container">
        <h1>MyProfile</h1>
        <form className="my-form" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="form-control"
              value={this.state.name}
              onChange={(e) => this.handleFieldChange("name", e)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              className="form-control"
              value={this.state.gender}
              onChange={(e) => this.handleFieldChange("gender", e)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Description about yourself"
              className="form-control"
              value={this.state.description}
              onChange={(e) => this.handleFieldChange("description", e)}
            />
          </div>

          <div className="form-group form-check">
            <input
              id="check"
              type="checkbox"
              className="form-check-input"
              value={this.state.check}
              onChange={this.handleCheckChange}
            />
            <label className="form-check-label" htmlFor="check">
              I have read the terms of conduct
            </label>
          </div>

          <div className="form-group submit">
            <input
              type="submit"
              className="form-control btn btn-primary"
              value="Submit"
              disabled={
                !this.state.name ||
                !this.state.gender ||
                !this.state.description ||
                !this.state.check
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default MyProfile;
