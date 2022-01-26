const length = prompt("Entrez le nombre de lignes : ")
let fir = ""

// gestion des lignes
for (let i = 1; i <= length; i++) {

  // gestion des colonnes
  for (let j = 0; j < i; j++) {
    fir += '☺'
  }
  
  fir += '\n'

}
console.log(fir);