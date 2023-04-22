const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

export const formattedDate = (date) => {
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
