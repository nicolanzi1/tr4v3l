import React from "react"
import { Nav, Bars, NavBtn, NavMenu, NavLink } from "./HeaderElements"
import { menuData } from "../../data/MenuData"
import { Button } from "../Button"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">TR4V3L</NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/trips">
          Book a Flight
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header
