// Version longue

const today = new Date()

// Dimanche -> Samedi : 0 -> 6
let dayOfWeek = today.getDay()

let strDayOfWeek = ""

switch (dayOfWeek) {
  case 0:
    strDayOfWeek = "dimanche"
    break

  case 1:
    strDayOfWeek = "lundi"
    break

  case 2:
    strDayOfWeek = "mardi"
    break

  case 3:
    strDayOfWeek = "mercredi"
    break

  case 4:
    strDayOfWeek = "jeudi"
    break

  case 5:
    strDayOfWeek = "vendredi"
    break

  default:
    strDayOfWeek = "samedi"
}

console.log(`Bonjour, nous sommes ${strDayOfWeek}!`);

// Version courte

const DaysOfWeek = [
  "dimanche", 
  "lundi", 
  "mardi", 
  "mercredi", 
  "jeudi", 
  "vendredi", 
  "samedi"
]

console.log(`Bonjour, nous sommes ${DaysOfWeek[today.getDay()]}!`);