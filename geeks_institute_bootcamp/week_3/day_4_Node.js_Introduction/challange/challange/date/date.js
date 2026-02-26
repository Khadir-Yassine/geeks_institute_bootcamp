function getTimeUntilNewYear() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const newYearDate = new Date(nextYear, 0, 1); 

  const difference = newYearDate - now;
  if (difference <= 0) {
    return "Happy New Year!";
  }
  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;
  const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  return `January 1st is in ${days} days and ${formattedTime} hours`;
}
module.exports = { getTimeUntilNewYear };