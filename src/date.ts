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

/* ======================== */
// Reverse date back to the full JavaScript date object format
export const reverseDateFunc = (currentDate: any) => {
  const dataString = currentDate;

  const monthsForAdjustments = [
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

  // Split the date string into its parts
  const parts = dataString.split(" "); // Create an array where each part becomes element of an array
  // console.log(parts);

  const removeComma = parts.map((each: string) => each.replace(",", ""));
  // console.log(removeComma);

  const day = parseInt(removeComma[0], 10); // Convert the day part to a number. Note that the 10 that looks useless there is for making sure the number is in decimal
  // console.log(day);

  const monthIndex = monthsForAdjustments.indexOf(removeComma[1]); // Get the index of the month from the array
  // console.log(monthIndex);

  const year = parseInt(removeComma[2], 10); // Convert the year part to a number
  // console.log(year);

  const reverseDate = new Date(year, monthIndex, day);
  // console.log(reverseDate);
  return reverseDate;
};

// reverseDateFunc("6 Nov, 2023");
