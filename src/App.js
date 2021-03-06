import React, { Component } from 'react';
import {Panel, Col, Form} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import {ClientId, ClientSecret, CustomerId, AccountId, AccessToken} from './Client';
import {Authorize} from './Buttons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Col lg="4">
          <Panel header={"Enter details"} md='4'>
            <Form horizontal>
              <ClientId/>
              <ClientSecret/>
              <CustomerId/>
              <AccountId/>
              <AccessToken/>
              <Authorize/>
            </Form>
          </Panel>
        </Col>
      </div>
    );
  }
}

export default App;
