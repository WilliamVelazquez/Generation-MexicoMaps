import React, { Component } from 'react';
import SimpleButton from '../Components/SimpleButton';

class ButtonList extends Component {
  render() {
    return (
      <div>
        <SimpleButton btnText='Find My Current Location' handleClick={this.props.handleFindCurrentLocation} />
      </div>
    );
  }
}

export default ButtonList;
