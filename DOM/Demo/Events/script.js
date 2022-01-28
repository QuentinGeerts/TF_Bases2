
const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')
// 1ere façon
// btn.onclick = afficherText

// Fonction anonyme
btn.onclick = function () {
  console.log('function (this) {} :>> ', this);
}

// Fonction flèchée
btn2.onclick = () => {
  console.log('(this) => {} :>> ', this);
}

// 2e façon
// btn.addEventListener("click", afficherText2)

// btn.addEventListener("click", function (e) {
//   console.log('e :>> ', e);
//   afficherText2("Quentin")
// })

function afficherText() {
  document.getElementById('info').innerText = "Hello world"
}

function afficherText2(prenom) {
  document.getElementById('info').innerText = "Hello " + prenom
}