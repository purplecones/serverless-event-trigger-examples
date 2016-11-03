import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  }

  render() {
    return (
      <div>Menu</div>
    );
  }
}

export default Menu;
