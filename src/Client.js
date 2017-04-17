import React, {Component} from 'react';
import {Col, ControlLabel, FormGroup, FormControl} from 'react-bootstrap';

const labelWidth = 3;
const controlWidth = 9;

class ClientId extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onClientIdChange(event.target.value);
  }

  render() {
    return (
      <FormGroup id="clientId">
        <Col componentClass={ControlLabel} lg={labelWidth}>Client ID</Col>
        <Col lg={controlWidth}>
          <FormControl type="text" value={this.props.clientId} onChange={this.handleChange} />
        </Col>
      </FormGroup>
    );
  }
}

class ClientSecret extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onClientIdChange(event.target.value);
  }

  render() {
    return (
      <FormGroup id="clientSecret">
        <Col componentClass={ControlLabel} lg={labelWidth}>Secret</Col>
        <Col lg={controlWidth}>
          <FormControl type="password" value={this.props.clientSecret} onChange={this.handleChange} />
        </Col>
      </FormGroup>
    );
  }
}

class CustomerId extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onCustomerIdChange(event.target.value);
  }

  render() {
    return (
      <FormGroup id="customerId">
        <Col componentClass={ControlLabel} lg={labelWidth}>Customer ID</Col>
        <Col lg={controlWidth}>
          <FormControl type="text" value={this.props.customerId} onChange={this.handleChange} />
        </Col>
      </FormGroup>
    );
  }
}

class AccountId extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onAccountIdChange(event.target.value);
  }

  render() {
    return (
      <FormGroup id="accessToken">
        <Col componentClass={ControlLabel} lg={labelWidth}>Account ID</Col>
        <Col lg={controlWidth}>
          <FormControl type="text" value={this.props.accountId} onChange={this.handleChange} />
        </Col>
      </FormGroup>
    );
  }
}

class AccessToken extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onAccessTokenChange(event.target.value);
  }

  render() {
    return (
      <FormGroup id="accessToken">
        <Col componentClass={ControlLabel} lg={labelWidth}>Access Token</Col>
        <Col lg={controlWidth}>
          <FormControl type="text" value={this.props.accessToken} onChange={this.handleChange} />
        </Col>
      </FormGroup>
    );
  }
}

export {ClientId, ClientSecret, CustomerId, AccountId, AccessToken};
