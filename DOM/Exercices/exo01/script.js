// On récupère nos éléments existants
const btn = document.getElementById('btn')
const liste = document.getElementById('liste')

// On ajoute un comportement au clique du bouton
btn.onclick = addItem


// Fonction qui permet d'ajouter un item à la liste
function addItem() {

  // On crée un item de type "li"
  const item = document.createElement('li')

  // On donne un texte au li
  item.innerText = "item"

  // On ajoute le li à la liste (ul)
  liste.appendChild(item)
}
