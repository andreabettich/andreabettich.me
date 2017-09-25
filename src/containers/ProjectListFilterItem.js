import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectFilter } from '../actions/index';
import { bindActionCreators } from 'redux';

class ProjectListFilterItem extends Component {
  itemClassName() {
    const activeClass = this.props.active
      ? 'projects__filter__item--active'
      : '';
    return `projects__filter__item ${activeClass}`;
  }
  render() {
    return (
      <div
        className={this.itemClassName()}
        onClick={() => this.props.selectFilter(this.props.value)}
      >
        {this.props.value}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectFilter: selectFilter }, dispatch);
}

export default connect(null, mapDispatchToProps)(ProjectListFilterItem);
