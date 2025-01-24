const maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
const femaleNames=["AKosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
function calculateAkanName(event){event.preventDefault();}
//Get form inputs
const MM = parseInt(document.getElementById("month").value);
const YY = parseInt(document.getElementById("year").value);
const DD = parseInt(document.getElementById("day").value);
const gender=document.querySelector("gender")
const CC=Math.floor(year/100) 
const day=Math.floor( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7
console.log=(MM)
console.log=(YY)
console.log=(DD)
console.log=(gender)
const Index = ((day %7)+7)%7;
