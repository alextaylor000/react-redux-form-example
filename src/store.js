import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { modelReducer, formReducer, modeled } from 'react-redux-form';
import thunk from 'redux-thunk';
import userModelReducer from './reducers/models/userModelReducer';
import employmentHistory from './models/employment_history';
import employmentHistoryModelReducer from './reducers/models/employmentHistoryModelReducer';
import userFormReducer from './reducers/forms/userFormReducer';

const store = createStore(
  combineReducers({
    user: userModelReducer,
    userForm: userFormReducer,

    employmentHistory: employmentHistoryModelReducer,
    employmentHistoryForm: formReducer('employmentHistory', employmentHistory),
  }),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : noop => noop
  )
);

export default store;
