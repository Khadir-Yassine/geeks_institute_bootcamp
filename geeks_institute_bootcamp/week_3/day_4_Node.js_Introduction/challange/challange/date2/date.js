function minutesLived(birthdate) {
  const birth = new Date(birthdate);
  const now = new Date();
  const differenceInMilliseconds = now - birth;
  if (differenceInMilliseconds < 0) {
    return "Birthdate cannot be in the future!";
  }
  const minutes = Math.floor(differenceInMilliseconds / (1000 * 60));
  return `You have lived approximately ${minutes.toLocaleString()} minutes.`;
}
module.exports = { minutesLived };