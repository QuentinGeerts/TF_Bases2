const form = document.forms.exo06

form.onchange = check;

function autocomplete() {
  const form = document.forms.exo06
  form.nom.value = 'Dupont'
  form.prenom.value = 'Jean'
  form.cp.value = '1000'
}

function reset() {
  const form = document.forms.exo06
  form.reset()
}

function check() {
  let valid = false

  if (form.nom.value.length === 0) {
    document.getElementById('errorNom').innerText = "Ton champ est vide"
    form.nom.classList.add('invalid')
    form.nom.classList.remove('valid')
  } 
  else {
    document.getElementById('errorNom').innerText = ""
    form.nom.classList.add('valid')
    form.nom.classList.remove('invalid')
  }

  let cp = parseInt(form.cp.value)

  if (isNaN(cp) || cp < 1000 || cp > 9999) {
    document.getElementById('errorCp').innerText = "Le code postal doit être entre 1000 et 9999"
    form.cp.classList.add('invalid')
    form.cp.classList.remove('valid')
  }
  else {
    document.getElementById('errorCp').innerText = ""
    form.cp.classList.remove('invalid')
    form.cp.classList.add('valid')
  }

}