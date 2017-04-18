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

const clientIdStateToProps = stateToProps("clientId", "Cliient ID");
const clientIdDispatchToProps = dispatchToProps(SET_CLIENT_ID, "clientId");
const ClientId = connect(clientIdStateToProps, clientIdDispatchToProps)(Input);

const clientSecretStateToProps = stateToProps("clientSecret", "Cliient Secret");
const clientSecretDispatchToProps = dispatchToProps(SET_CLIENT_SECRET, "clientSecret");
const ClientSecret = connect(clientSecretStateToProps, clientSecretDispatchToProps)(Input);

const customerIdStateToProps = stateToProps("customerId", "Cuustomer ID");
const customerIdDispatchToProps = dispatchToProps(SET_CUSTOMER_ID, "customerId");
const CustomerId = connect(customerIdStateToProps, customerIdDispatchToProps)(Input);

const accountIdStateToProps = stateToProps("accountId", "Acccount ID");
const accountIdDispatchToProps = dispatchToProps(SET_ACCOUNT_ID, "accountId");
const AccountId = connect(accountIdStateToProps, accountIdDispatchToProps)(Input);

const accessTokenStateToProps = stateToProps("accessToken", "Acccesss Token");
const accessTokenDispatchToProps = dispatchToProps(SET_ACCESS_TOKEN, "accessToken");
const AccessToken = connect(accessTokenStateToProps, accessTokenDispatchToProps)(Input);

export {ClientId, ClientSecret, CustomerId, AccountId, AccessToken};
