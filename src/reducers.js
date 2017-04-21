import request from 'superagent';

const objectAssign = require('object-assign');

const initialState = {
    clientId: '1234567',
    clientSecret: 'BigSecr3t',
    customerId: '123456789',
    accountId: '1212121212',
    accessToken: 'FAFAFAFAFA'
}

const SET_CLIENT_ID = "SET_CLIENT_ID";
const SET_CLIENT_SECRET = "SET_CLIENT_SECRET";
const SET_CUSTOMER_ID = "SET_CUSTOMER_ID";
const SET_ACCOUNT_ID = "SET_ACCOUNT_ID";
const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
const REQUEST_AUTHORIZE = "REQUEST_AUTHORIZE";

const defaultRedirectUri = encodeURI("http://localhost:3010/third-party/redirect");

function authoriseRequest(bearerToken, clientId, redirectUri = defaultRedirectUri) {
    request.get("http://localhost:3010/oauth2/authorize?response_type=code" +
                `&client_id=${clientId}&redirect_uri=${redirectUri}`)/*.
                set("Authorization", `Bearer ${bearerToken}`)*/.end(
                    function(err, response) {
                        console.log(`AUTH RESPONSE${JSON.stringify(response.body)}`);
                    }
                )
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CLIENT_ID:
            const newState = objectAssign({}, state, {clientId: action.clientId});
            return newState;
        case SET_CLIENT_SECRET:
            return objectAssign({}, state, {clientSecret: action.clientSecret});
        case SET_CUSTOMER_ID:
            return objectAssign({}, state, {customerId: action.customerId});
        case SET_ACCOUNT_ID:
            return objectAssign({}, state, {accountId: action.accessId});
        case SET_ACCESS_TOKEN:
            return objectAssign({}, state, {accessToken: action.accessToken});
        case REQUEST_AUTHORIZE:
            authoriseRequest(state.accessToken, state.clientId);
            return state;    
        default:
            return state;
    }
}

export {rootReducer, SET_CLIENT_ID, SET_ACCESS_TOKEN, SET_ACCOUNT_ID, SET_CLIENT_SECRET, SET_CUSTOMER_ID, REQUEST_AUTHORIZE};
