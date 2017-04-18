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
        default:
            return state;
    }
}

export {rootReducer, SET_CLIENT_ID, SET_ACCESS_TOKEN, SET_ACCOUNT_ID, SET_CLIENT_SECRET, SET_CUSTOMER_ID};
