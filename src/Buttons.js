import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {REQUEST_AUTHORIZE} from './reducers';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    clientId: state.clientId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch({type: REQUEST_AUTHORIZE});
    }
  }
}

class _Authorize extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onClick();
  }

  render() {
    return (
      <Button onClick={this.handleClick}>OAuth Authorize</Button>
    )
  }
}

const Authorize = connect(mapStateToProps, mapDispatchToProps)(_Authorize)

export {Authorize};