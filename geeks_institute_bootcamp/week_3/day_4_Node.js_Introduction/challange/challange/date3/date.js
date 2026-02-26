const Holidays = require("date-holidays");

function getNextHoliday() {
  const hd = new Holidays("US");
  const now = new Date();

  const holidays = hd.getHolidays(now.getFullYear());

  let nextHoliday = holidays.find(h => new Date(h.date) > now);

  if (!nextHoliday) {
    const nextYearHolidays = hd.getHolidays(now.getFullYear() + 1);
    nextHoliday = nextYearHolidays[0];
  }

  const holidayDate = new Date(nextHoliday.date);
  const difference = holidayDate - now;
  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;
  const formattedTime =
    `${String(hours).padStart(2, "0")}:` +
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}`;
  return `Today is ${now.toDateString()}.\nThe next holiday is ${nextHoliday.name} and it is in ${days} days and ${formattedTime} hours.`;
}
module.exports = { getNextHoliday };