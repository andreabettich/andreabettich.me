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
      <div className="projects__filter small-12">
        <b>
          Projects <br /> Contributions
        </b>
        <div className="list">{this.renderFilters()}</div>
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
