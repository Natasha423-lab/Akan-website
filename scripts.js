function calculate(century, year, month, day) {
  const day =
    (Math.floor(century / 4) -
      2 * century -
      1 +
      Math.floor((5 * year) / 4) +
      Math.floor((26 * (month + 1)) / 10) +
      day) %
    7;
  return (day + 7) % 7;
}
const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Amaal",
];
if (gender.toLowerCase() === "male") {
  return maleNames[dayOfWeek];
} else if (gender.toLowerCase() === "female") {
  return femaleNames[dayOfWeek];
} else {
  return "Invalid gender. Please enter 'male' or 'female'.";
}
const day = parseInt(document.getElementById("day").value);
const month = parseInt(document.getElementById("month").value);
const year = parseInt(document.getElementById("year").value);
const gender = document.querySelector("gender");
if (month <= 0 || month > 12) {
  alert("Invalid month!");
  return;
}
if (day <= 0 || day > 31) {
  alert("Invalid day! Please enter a day between 1 and 31.");
  return;
}
const index = ((day % 7) + 7) % 7;
const century = Math.floor(year / 100);
const YY = year % 100;
const dayOfWeek = calculateDayOfWeek(century, yearDigits, month, day);
const akanName = getAkanName(dayOfWeek, gender);
alert(`Your Akan name is ${akanName}`);
calculateAkanName();
