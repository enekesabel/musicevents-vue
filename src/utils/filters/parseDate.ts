import moment from 'moment';

export const parseDate = (date: string) => {
  return moment(date).format('DD.MM.YYYY');
};
