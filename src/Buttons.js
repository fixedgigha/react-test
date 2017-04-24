import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {REQUEST_AUTHORIZE} from './reducers';
import {connect} from 'react-redux';
import request from 'superagent';
import {Client} from 'node-rest-client';

const client = new Client();

const defaultRedirectUri = encodeURI("http://localhost:3010/third-party/redirect");

function authoriseRequest(dispatch, bearerToken, clientId, redirectUri = defaultRedirectUri) {
  const args = {headers: {Authorization : `Bearer ${bearerToken}`}}
  client.get("http://localhost:3010/oauth2/authorize?response_type=code" +
                `&client_id=${clientId}&redirect_uri=${redirectUri}`, 
                args,
                function(data, response) {
    const accessToken = data.access_token;
    const refreshToken = data.refresh_token;
    console.log(`Auth response ${accessToken} - refresh ${refreshToken}`);
    dispatch({type: REQUEST_AUTHORIZE, accessToken: accessToken, refreshToken: refreshToken});
  });           
}

const mapStateToProps = (state) => {
  return {
    clientId: state.clientId,
    accessToken: state.accessToken
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (clientId, accessToken) => {
      authoriseRequest(dispatch, clientId, accessToken);
    }
  }
}

class _Authorize extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onClick(this.props.clientId, this.props.accessToken);
  }

  render() {
    return (
      <Button onClick={this.handleClick}>OAuth Authorize</Button>
    )
  }
}

const Authorize = connect(mapStateToProps, mapDispatchToProps)(_Authorize)

export {Authorize};