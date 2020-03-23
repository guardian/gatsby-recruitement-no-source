
import PropTypes from "prop-types"
import React from "react"

class Section extends React.Component {
  render() {
      console.log(this.props.section)
    const projects = this.props.section.projects.map((project, idx) => {
      return (
          <div key={idx}>
            <p>{project.name}</p>
            <p>{project.description}</p>
          </div>
      )
    })
    return (
      <>
        <div>
          <p>{this.props.section.name}</p>
          <p>{this.props.section.chunk}</p>
        </div>
        <br/>
        <div>{projects}</div>
      </>
    )
  }
}

Section.propTypes = {
  section: PropTypes.shape({
    name: PropTypes.string,
    chunk: PropTypes.string,
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
      })
    ),
  }),
}

export default Section
