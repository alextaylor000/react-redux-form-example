import { modelReducer, modeled } from 'react-redux-form';
import employmentHistory from '../../models/employment_history';
const _ = require('lodash');

function calculateTotalMonths(employers) {
  return employers.reduce((acc, employer) => acc + parseInt(employer.months), 0)
}

function allFieldsCompleted(employers) {
  return employers.every((employer) => employer.months > 0 );
}

function employmentHistoryReducer(state = employmentHistory, action) {
  const rrfReducer = modelReducer('employmentHistory', employmentHistory);
  const rrfState = _.cloneDeep(rrfReducer(state, action)); // modelReducer outputs a frozen object so we need to clone it

  const totalMonths = calculateTotalMonths(rrfState.employers);

  let employers = rrfState.employers;
  if (totalMonths < 6 && allFieldsCompleted(employers)) {
    const nextId = employers.length;
    employers.push({ id: nextId, name: '', months: 0 });
  }

  const nextState = _.merge(rrfState, { employers, totalMonths });

  return nextState;
}

const employmentHistoryModelReducer = employmentHistoryReducer;
export default employmentHistoryModelReducer;
