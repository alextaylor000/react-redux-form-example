import { modelReducer, modeled } from 'react-redux-form';
import employmentHistory from '../../models/employment_history';

function employmentHistoryReducer(state = employmentHistory, action) {
  const rrfReducer = modelReducer('employmentHistory', employmentHistory);
  const nextState = rrfReducer(state, action);
  console.log('employmentHistoryReducer, nextState:', nextState);

  return nextState;
}

const employmentHistoryModelReducer = employmentHistoryReducer;
export default employmentHistoryModelReducer;
