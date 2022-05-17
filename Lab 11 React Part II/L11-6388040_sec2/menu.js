import React, { Component } from "react";
import styled from "styled-components";

// Connect to APIs
// const apiKey = '6e9f03f331394b45955f57810e72eead';
// const keyword = document.querySelector('#search-field');

// const btn = document.querySelector('#search-btn');

// btn.addEventListener('click', getData);

// function getData() {
//     fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${keyword.value}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log(keyword);
//             console.log(data);
//     })
// }

const Welcome = styled.h1`
    display: inline;
    margin: 6vh;
`;

const MyForm = styled.form`
    background-color: #F2F3F4;
    text-align: left;
    padding: 22px;
    display: inline;
    margin: 15vh;
`;

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodname: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(changeObject) {
        this.setState(changeObject);
    }
    render() {
        return(
            <div>
                <br/><br/>
                <Welcome>Explore Menu</Welcome>
                <MyForm>
                    <label>Are you looking for food?: </label>
                    <input
                        id="search-field"
                        type="text"
                        name="foodname"
                        value={this.state.foodname}
                        onChange={ (e) => {
                            this.handleChange({
                                foodname: e.target.value
                            })
                        }}/>
                    <button id="search-btn" type="button">Search</button>
                </MyForm>
            </div>
        );
    }
}
export default Forms;