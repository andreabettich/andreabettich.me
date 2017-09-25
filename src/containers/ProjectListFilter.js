import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectListFilterItem from './ProjectListFilterItem';

class ProjectListFilter extends Component {
  renderFilters() {
    return this.props.filters.map(item => (
      <ProjectListFilterItem
        key={item}
        value={item}
        active={this.props.activeFilter === item}
      />
    ));
  }
  render() {
    return (
      <div className="projects__filter small-12 cell">
        <div className="grid-x">
          <div className="small-12 cell">
            <strong>Projects & Contributions</strong>
          </div>
          <div className="small-12 cell">
            <div className="grid-x">{this.renderFilters()}</div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filters: state.filters,
    activeFilter: state.activeFilter
  };
}

export default connect(mapStateToProps)(ProjectListFilter);
