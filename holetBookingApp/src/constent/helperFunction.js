export const getCurentDate = () => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${year}-${month + 1}-${day}`;
};

export const getDate = date => {
  const newdate = new Date(date);
  const dateArray = newdate.toDateString().split(' ');

  const DAY = dateArray[0] + 'day';
  const MONTH = dateArray[1];
  const DATE = dateArray[2];
  return {DAY, MONTH, DATE};
};
