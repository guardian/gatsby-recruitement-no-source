import React from "react"
import PropTypes from "prop-types"
import NavItem from "./nav-item"


const style = {
    margin: `0 auto`,
    padding: `1.45rem 1.0875rem`,
    display: `inline-block`,
    textAlign: `center`,
    width: `100%`
  }

class Navbar extends React.Component {
  render() {
    const menuItemElements = this.props.menuItems.map(item => (
      <NavItem item={item} />
    ))
    return <nav style={style}>{menuItemElements}</nav>
  }
}

Navbar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    })
  ),
}

export default Navbar
