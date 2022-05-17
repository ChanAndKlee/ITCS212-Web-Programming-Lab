/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

class InfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
      nationality: "Thai",  // Set as default, in case the user didn't select this value
      disability: "No", 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    // (VALUE)
    const value = e.target.value;
    // (KEY) Link to name in JSX file (allow user to input multiple inputs)
    const elementname = e.target.name;
    this.setState({
      [elementname]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.type === "normal") {
      alert(`Hello, ${this.state.firstname+" "+this.state.lastname+
      `\nYour age is ${this.state.age}`}`);
    }
    else if (this.props.type === "special") {
      alert(`Hello, ${this.state.firstname+" "+this.state.lastname+
      `\nYour nationality is ${this.state.nationality}`}`);
    }
  }
  
  render() {
    //  Check the props type (Special?) before displaying
    let national, disable
    if (this.props.type === "special") {
      national =
      <div>
        <label for="selNation">Pick your nationality:</label>
        <select id="selNation" name="nationality" value={this.state.nationality} onChange={this.handleChange}>
          <option value="Thai">Thai</option>
          <option value="Eng">Eng</option>
          <option value="Chinese">Chinese</option>
        </select><br/>
      </div>

      disable =
      <div>
        <label for="selDis">Disability:</label>
        <select id="selDis" name="disability" value={this.state.disability} onChange={this.handleChange}>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select><br/>
      </div>
    }
      return (
        <form onSubmit={this.handleSubmit}>
          {/* First Name */}
          <label for="txtFirstname">First Name:</label>
          <input
              id="txtFirstname"
              name="firstname"
              type="text"
              value={this.state.firstname}
              // Allows the txt field to change as the given input
              onChange={this.handleChange}
          /><br/>
          {/* Last Name */}
          <label for="txtLastname">Last Name:</label>
          <input
              id="txtLastname"
              name="lastname"
              type="text"
              value={this.state.lastname}
              onChange={this.handleChange}
          /><br/>
          {/* Age */}
          <label for="txtAge">Age:</label>
          <input
            id="txtAge"
            name="age"
            type="text"
            value={this.state.age}
            onChange={this.handleChange}
          /><br/>
          {national}
          {disable}
        <input type="submit" value="Submit"/>
      </form>
      );
  }
}

ReactDOM.render(<InfoForm type="normal" />, document.getElementById('root'));
ReactDOM.render(<InfoForm type="special" />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
