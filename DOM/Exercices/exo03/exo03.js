/*
  Créez le programme permettant d’ajouter des articles dans un panier. Il faut pouvoir calculer le total des achats en temps réel.
*/

const cart = document.getElementById('cart')
const price = document.getElementById('price')

// Initialisation du prix de panier à 0 quand la page est chargée
window.onload = (function (value) {
  price.value = value
})(0)

function AddProductToCart(event) {

  // Récupérer le produit sélectionné
  const productRow = event.target.parentNode.parentNode

  // Créer les composants de mon panier
  const productCartRow = document.createElement('tr')
  const productCartLabel = document.createElement('td')
  const productCartPrice = document.createElement('td')

  // Paramétrer les colonnes
  productCartLabel.innerText = productRow.children[0].innerText
  productCartPrice.innerText = productRow.children[1].innerText

  // Ajouter la ligne et les colonnes dans le panier
  productCartRow.appendChild(productCartLabel)
  productCartRow.appendChild(productCartPrice)
  cart.appendChild(productCartRow)

  // Incrémenter la somme du total du panier
  price.value = parseFloat(price.value) + parseFloat(productCartPrice.innerText)
}