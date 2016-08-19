import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { modelReducer, formReducer } from 'react-redux-form';
import thunk from 'redux-thunk';
import userModelReducer from './reducers/models/userModelReducer';
import userFormReducer from './reducers/forms/userFormReducer';
import employmentHistory from './models/employment_history';

const store = createStore(
  combineReducers({
    user: userModelReducer,
    userForm: userFormReducer,

    employmentHistory: modelReducer('employmentHistory', employmentHistory),
    employmentHistoryForm: formReducer('employmentHistory', employmentHistory),
  }),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : noop => noop
  )
);

export default store;
