const { addDays, format } = require("date-fns");
function showDateOperations() {
  const now = new Date();
  console.log("Current Date:", now);
  const futureDate = addDays(now, 5);
  const formattedDate = format(futureDate, "yyyy-MM-dd HH:mm:ss");

  console.log("Date after 5 days (formatted):", formattedDate);
}
module.exports = showDateOperations;