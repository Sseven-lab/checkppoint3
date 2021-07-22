import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary>
          <Link to="/">
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/projects">
            <Menu.Item
              name="projects"
              active={activeItem === 'projects'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/admin/manage">
            <Menu.Item
              name="manage"
              active={activeItem === 'manage'}
              onClick={this.handleItemClick}
            />{' '}
          </Link>
        </Menu>
      </div>
    );
  }
}
