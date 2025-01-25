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
    "Ama",
  ];
  const gender=parseInt (document.querySelector("gender"))
  const day = parseInt(document.getElementById ("day"))
   const month = parseInt(document.getElementById ("month")) 
   const year= parseInt(document.getElementById ("year"))
  if (day <= 0 || day > 31) {
    alert("Please enter a valid day");
    return;
  }
  if (month <= 0 || month > 12) {
    alert("Please enter a valid month");
    return;
  }

  const CC = Math.floor(year / 100);
  const YY = year % 100
  const DD= Math.floor(
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (month + 1)) / 10 + day) % 7
  );

  if (gender === "male") {
    akanName = maleNames[dayOfWeek];
  } else if (gender === "female") {
    akanName = femaleNames[dayOfWeek];
  } else {
    alert("Invalid gender. Please enter 'male' or 'female'.");
    return;
  }
  alert(`Your Akan name is ${akanName}`);
getAkanName();
