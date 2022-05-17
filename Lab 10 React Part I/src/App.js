import React from 'react';
class InfoForm extends React.Component {
    constructor(props) {
    }
    handleChange(e) {
    }
    handleSubmit(e) {
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* First Name */}
                <label for="textFirstName">First Name:</label>
                <input
                    name="firstname"
                    value={this.state.firstname}
                    onChange={this.state.handleChange}
                    id="textFirstName"
                    type="text"
                /><br/>
            </form>
        );
    }

}


export default InfoForm;