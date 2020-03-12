import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const style = {
  margin: `0 auto`,
  padding: `1.45rem 2rem`,
  display: `inline-block`,
  color: `white`,
  textDecoration: `none`,
}

class NavItem extends React.Component {
  render() {
    return (
      <Link to={this.props.item.path} style={style}>
        {this.props.item.name}
      </Link>
    )
  }
}

NavItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
  }),
}

export default NavItem
