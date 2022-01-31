/*
  Reprenez le programme du panier.
    ➔ Modifiez l’affichage du panier pour que celui-ci soit agrégé.
    ➔ Ajoutez la possibilité de supprimer un article du panier.
    Il faudra bien sûr recalculer le total
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

  // productFound => false => le produit n'est pas dans la liste
  // productFound => true => le produit est dans la liste
  let productFound = false

  // récupérer la liste des produits dans le panier
  const products = cart.children

  // On parcourt la liste de produits
  for (let i = 0; i < products.length; i++) {
    // Récupération des labels et des prix
    let selectedProductLabel = productRow.children[0].innerText
    let selectedProductPrice = productRow.children[1].innerText

    let productLabel = products[i].children[0].innerText
    let productPrice = products[i].children[1].innerText

    // Vérification si le produit sélectionné se trouve dans la liste
    if (selectedProductLabel == productLabel && selectedProductPrice == productPrice) {
      // Si le produit est dans la liste, on incrémente la quantité
      products[i].children[2].innerText = parseInt(products[i].children[2].innerText) + 1

      // Le produit a été trouvé
      productFound = true
    }

  }

  if (!productFound) {
    // Créer les composants de mon panier
    const productCartRow = document.createElement('tr')
    const productCartLabel = document.createElement('td')
    const productCartPrice = document.createElement('td')
    const productCartQuantity = document.createElement('td')
    const productCartDelete = document.createElement('td')

    // Gestion du bouton supprimé
    const productCartDeleteBtn = document.createElement('button')
    productCartDeleteBtn.innerText = 'Supprimer'
    productCartDeleteBtn.onclick = RemoveProductToCart
    productCartDelete.appendChild(productCartDeleteBtn)

    // Paramétrer les colonnes
    productCartLabel.innerText = productRow.children[0].innerText
    productCartPrice.innerText = productRow.children[1].innerText
    productCartQuantity.innerText = 1

    // Ajouter la ligne et les colonnes dans le panier
    productCartRow.appendChild(productCartLabel)
    productCartRow.appendChild(productCartPrice)
    productCartRow.appendChild(productCartQuantity)
    productCartRow.appendChild(productCartDelete)
    cart.appendChild(productCartRow)
  }

  // Incrémenter la somme du total du panier
  price.value = parseFloat(price.value) + parseFloat(productRow.children[1].innerText)
}

function RemoveProductToCart(event) {

  const productRowCart = event.target.parentNode.parentNode
  const productQuantity = productRowCart.children[2]

  // Si j'en ai au moins 2
  if (productQuantity.innerText > 1) {
    productQuantity.innerText = parseInt(productQuantity.innerText) - 1
  }
  // Si j'en ai, je supprime la ligne
  else {
    cart.removeChild(productRowCart)
  }

  price.value = parseFloat(price.value) - parseFloat(productRowCart.children[1].innerText)
}