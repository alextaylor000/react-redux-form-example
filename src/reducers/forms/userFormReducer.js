import { formReducer } from 'react-redux-form';
import initialUserState from '../../models/user';

const userFormReducer = formReducer('user', initialUserState);
export default userFormReducer;
