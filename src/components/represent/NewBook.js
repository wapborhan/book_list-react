import React, { Component } from "react";

export default class NewBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: "",
      writter: "",
      description: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div style={{ width: "500px", margin: "30px auto", textAlign: "left" }}>
        <div className="card">
          <div className="card-header text-center">
            <h5>New Book Entry</h5>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Book Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="bookName"
                  value={this.state.bookName}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Writter:</label>
                <input
                  type="text"
                  className="form-control"
                  name="writter"
                  value={this.state.writter}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
