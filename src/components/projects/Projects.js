import React, { Component } from 'react';
import ProjectList from '../../containers/ProjectList';
import ProjectListFilter from '../../containers/ProjectListFilter';

class Projects extends Component {
  render() {
    return (
      <div className="small-12 projects">
        <ProjectListFilter />
        <ProjectList />
      </div>
    );
  }
}

export default Projects;
