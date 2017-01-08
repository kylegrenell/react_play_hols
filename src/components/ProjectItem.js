import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
      return (
      <li className="Project">
      <strong>{this.props.project.title}</strong>: <em>{this.props.project.category}</em>
      </li>
    );
  }
}

export default ProjectItem;
