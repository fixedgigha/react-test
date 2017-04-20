import React, {Component} from 'react';
import {Col, ControlLabel, FormGroup, FormControl} from 'react-bootstrap';
import {connect} from 'react-redux';
import {SET_CLIENT_ID, SET_CLIENT_SECRET, SET_CUSTOMER_ID, SET_ACCOUNT_ID, SET_ACCESS_TOKEN} from './reducers';

const labelWidth = 3;
const controlWidth = 9;

const stateToProps = (field, label) => (state) => {
  const obj = {field: field, label: label};
  obj[field] = state[field];
  return obj;
}

const dispatchToProps = (type, field) => (dispatch) => {
  return {
    onChange: (value) => {
      const action = {type: type};
      action[field] = value;
      dispatch(action);
    }
  }  
} 

class Input extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <FormGroup id={this.props.field}>
        <Col componentClass={ControlLabel} lg={labelWidth}>{this.props.label}</Col>
        <Col lg={controlWidth}>
          <FormControl type="text" value={this.props[this.props.field]} onChange={this.handleChange} />
        </Col>
      </FormGroup>
    );
  }
}

function makeInput(field, label, action) {
  return connect(stateToProps(field, label), dispatchToProps(action, field))(Input);  
}

const ClientId = makeInput("clientId", "Client ID", SET_CLIENT_ID);
const ClientSecret = makeInput("clientSecret", "Client Secret", SET_CLIENT_SECRET);
const CustomerId = makeInput("customerId", "Customer ID", SET_CUSTOMER_ID);
const AccountId = makeInput("accountId", "Account ID", SET_ACCOUNT_ID);
const AccessToken = makeInput("accessToken", "Access Token", SET_ACCESS_TOKEN);

export {ClientId, ClientSecret, CustomerId, AccountId, AccessToken};
