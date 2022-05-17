import React from "react";
import styled from "styled-components";

const WelcomeTxt = styled.h1`
    text-align: center;
    color: #ff3c41;
`;

class home extends React.Component {
    render() {
        return (
          <div className="rectangle">
              <WelcomeTxt>This is Home Page</WelcomeTxt>
          </div>   
        );
    }
}

export default home;