import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"

const menuItems = [
  { name: "home", path: "/" },
  {
    name: "diversity & inclusion",
    path: "/diversity",
  },
  {
    name: "open people",
    path: "/open-people",
  },
  {
    name: "open source",
    path: "/open-source",
  },
  {
    name: "events & talks",
    path: "/events",
  },
]
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#474747`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1
        style={{
          margin: 0,
          textAlign: `right`,
        }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Navbar menuItems={menuItems} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
