import React, { Component } from 'react';
import Icon from '../basic/Icon';
import Link from '../basic/Link';

class ProjectListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.itemToggleActive = this.itemToggleActive.bind(this);
  }
  itemToggleActive(event) {
    event.preventDefault();
    this.setState(prevState => {
      return { isActive: !prevState.isActive };
    });
    event.stopPropagation(); // prevent event to bubble up the hierarchy
  }
  renderTechTags() {
    return this.props.item.tags.map(tag => {
      return <span key={tag}>{tag}</span>;
    });
  }
  renderLinks() {
    return this.props.item.links.map((link, index) => {
      return (
        <Link key={index} href={link.href} target="_blank">
          <Icon icon={link.icon} width="25px" height="25px" />
          <div className="popup">{link.info}</div>
        </Link>
      );
    });
  }
  listItemClassName() {
    return `project-list-item ${this.state.isActive ? 'is-active' : ''}`;
  }
  render() {
    const project = this.props.item;
    return (
      <div className="small-12 medium-6 large-4 cell">
        <div
          className={this.listItemClassName()}
          onClick={this.itemToggleActive}
        >
          <div className="project-list-item__logo">
            <Icon icon={project.icon} fill="#FFFFFF" />
          </div>
          <div className="project-list-item__links">
            <span onClick={this.itemToggleActive} className="close">
              <Icon icon="close" width="35px" height="35px" />
            </span>
            {this.renderLinks()}
          </div>
          <div className="project-list-item__content-wrapper">
            <p className="tech-list">{this.renderTechTags()}</p>
            <h1>{project.name}</h1>
            <p className="description">{project.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectListItem;
