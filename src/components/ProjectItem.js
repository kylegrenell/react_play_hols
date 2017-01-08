import React, { Component } from 'react';

class ProjectItem extends Component {

  deleteProject(){
    // console.log('test');
    this.props.onDelete(this.id);
  }

  render() {
      return (
      <li className="Project">
      <strong>{this.props.project.title}</strong>: <em>{this.props.project.category}</em> <strong>ID: {this.props.project.id}</strong>
      <a href='#' onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;
