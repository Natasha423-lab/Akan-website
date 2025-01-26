const maleNames = [
  "Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",
];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function calculateAkanName(event) {
  event.preventDefault();
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  if (!gender) {
    alert("Please select a gender.");
    return;
  }
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  if (isNaN(day) || day <= 0 || day > 31) {
    alert("Please enter a valid day.");
    return;
  }
  if (isNaN(month) || month <= 0 || month > 12) {
    alert("Please enter a valid month.");
    return;
  }
  if (isNaN(year) || year <= 0) {
    alert("Please enter a valid year.");
    return;
  }
  const CC = Math.floor(year / 100);
  const YY = year % 100;
  const DayOfWeek = Math.floor(
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (month + 1)) / 10 + day) % 7
  );
  const correctedDayOfWeek = (DayOfWeek + 7) % 7;
  const akanName =
    gender === "male"
      ? maleNames[correctedDayOfWeek]
      : femaleNames[correctedDayOfWeek];
  document.getElementById("result").innerText = `Your Akan Name is ${akanName}`;
  console.log(`Akan Name: ${akanName}`);
}
document
  .getElementById("akanForm")
  .addEventListener("submit", calculateAkanName);
