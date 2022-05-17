import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const TopMenu = styled.nav `
    display: flex;
    flex-direction: row;
    margin: 0px;
    background-color: #f29899;
`;

/* For styling <ul> */
const MyUl = styled.ul`
    list-style-type: none;
    display: flex;
`;

/* For styling <li> */
const MyLi = styled.li`
    display: block;
    padding: 14px 20px;
`;

/* For styling <link> */
const MyLink = styled(Link)`
    font-size: 20pt;
    color: white;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

class MyNav extends React.Component {
    render() {
        return (
        <TopMenu>
            <MyUl>
                <MyLi><MyLink to = "/">Home</MyLink></MyLi>
                <MyLi><MyLink to = "/menu">Explore Food Menu</MyLink></MyLi>
            </MyUl>
        </TopMenu>
        );
    }
}

export default MyNav;