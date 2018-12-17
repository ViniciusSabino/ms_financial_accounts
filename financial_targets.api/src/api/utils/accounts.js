import moment from 'moment';

import enumerators from '../utils/enumerators';

const setAccountDate = (dueDate, type) => {
  const days = moment().daysInMonth();
  const dueDateMoment = moment(dueDate);
  const ajustedDate = type === enumerators.account.type.monthly ? dueDateMoment.add(days, 'days') : dueDateMoment.add(12, 'months');
  return ajustedDate;
};

export default {
  setAccountDate
};
