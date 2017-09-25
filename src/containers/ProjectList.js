import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectListItem from '../components/projects/ProjectListItem';

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.filterProjects = this.filterProjects.bind(this);
  }
  filterProjects(item) {
    if (this.props.activeFilter !== 'all') {
      return item.technologies.includes(this.props.activeFilter);
    }
    return true;
  }
  renderProjectList() {
    return this.props.projects
      .filter(this.filterProjects)
      .map((item, index) => {
        return <ProjectListItem item={item} key={item.name} />;
      });
  }
  render() {
    return (
      <div className="grid-x grid-margin-x">{this.renderProjectList()}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects,
    activeFilter: state.activeFilter
  };
}

export default connect(mapStateToProps)(ProjectList);
