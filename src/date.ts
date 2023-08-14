const date = new Date(); //This only shows little of the date

//Get something more meaningful
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const dateFunc = () => {
  const month = date.getMonth();
  const getDate = `${date.getDate()} ${months[month]}, ${date.getFullYear()}`;
  return getDate;
};
