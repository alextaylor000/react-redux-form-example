import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { formReducer } from 'react-redux-form';
import thunk from 'redux-thunk';
import userModelReducer from './reducers/models/userModelReducer';
import userFormReducer from './reducers/forms/userFormReducer';

const store = createStore(
  combineReducers({
    user: userModelReducer,
    userForm: userFormReducer
  }),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : noop => noop
  )
);

export default store;
