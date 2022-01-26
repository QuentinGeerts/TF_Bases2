const VAT = 0.21

let priceEVAT = prompt("Entrez le prix unitaire HTC du livre :")
let quantity = prompt("Entrez la quantité de livre à acheter :")

let priceVAT = priceEVAT * quantity * (1 + VAT)

console.log(`Le prix TTC de ${quantity} livre(s) à ${priceEVAT}€ est de ${priceVAT}€`)