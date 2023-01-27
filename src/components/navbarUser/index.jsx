import React from "react";

import { Ul, Li, Span, Nav, Slink } from "./styles";

class Navbar extends React.Component {
  render() {
    return (
      <Nav>
        <Ul>
          <Slink to="/home">
            <Li>
              <Span>Home</Span>
            </Li>
          </Slink>
          <Slink to="/equipea">
            <Li>
              <Span>01</Span>
            </Li>
          </Slink>
          <Slink to="/equipeb">
            <Li>
              <Span>02</Span>
            </Li>
          </Slink>
          <Slink to="/equipec">
            <Li>
              <Span>03</Span>
            </Li>
          </Slink>
          <Slink to="/equiped">
            <Li>
              <Span>04</Span>
            </Li>
          </Slink>
          <Slink to="/equipee">
            <Li>
              <Span>05</Span>
            </Li>
          </Slink>
          <Slink to="/equipef">
            <Li>
              <Span>06</Span>
            </Li>
          </Slink>
          <Slink to="/sidebarj">
            <Li>
              <Span>07</Span>
            </Li>
          </Slink>
        </Ul>
      </Nav>
    );
  }
}

export default Navbar;
