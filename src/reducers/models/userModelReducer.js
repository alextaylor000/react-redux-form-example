import { modelReducer } from 'react-redux-form';
import initialUserState from '../../models/user';

const userModelReducer = modelReducer('user', initialUserState);
export default userModelReducer;
