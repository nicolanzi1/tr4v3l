import React from "react"
import { Nav, NavLink, Bars } from "./HeaderElements"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">TR4V3L</NavLink>
      <Bars />
    </Nav>
  )
}

export default Header
