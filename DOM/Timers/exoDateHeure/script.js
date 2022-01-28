displayHours()
// setInterval(displayHours, 1000)

displayDate()

function displayHours() {
  const now = new Date()

  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()

  if (hours < 10) hours = "0" + hours
  if (minutes < 10) minutes = "0" + minutes
  if (seconds < 10) seconds = "0" + seconds

  if (hours == 0 && minutes == 0 && seconds == 0) displayDate()

  let formattedHours = hours + ':' + minutes + ':' + seconds

  document.title = formattedHours

  const divHours = document.getElementById('hours')
  divHours.innerText = formattedHours

  // Pour le timeout
  setTimeout(displayHours, 1000);
}

function displayDate() {
  const now = new Date()

  const daysOfWeek = [
    'Dimanche', 'Lundi', 
    'Mardi', 'Mercredi', 
    'Jeudi', 'Vendredi', 
    'Samedi'
  ]

  const months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre',
    'Décembre'
  ]

  let days = daysOfWeek[now.getDay()]
  let day = now.getDate()
  let month = months[now.getMonth()]
  let year = now.getFullYear()

  const formattedDate = `${days}, le ${day} ${month} ${year}`

  const divDate = document.getElementById('date')
  divDate.innerText = formattedDate

}