const btn = document.getElementById('btn')
const liste = document.getElementById('liste')
const itemName= document.getElementById('itemName')

let cptItem = 0

console.log('itemName :>> ', itemName.value);

btn.onclick = addItem

function addItem() {
  const item = document.createElement('li')
  item.innerText = itemName.value
  item.setAttribute('id', 'item-' + cptItem)

  let idItem = item.getAttribute('id').split('item-')[1]

  const btnSuppress = document.createElement('button')

  btnSuppress.innerText = "X"
  
  btnSuppress.onclick = function () {
    removeItem(idItem)
  }
  
  item.appendChild(btnSuppress)
  
  liste.appendChild(item)
  cptItem ++
}

function removeItem(index) {
  const item = document.getElementById('item-' + index)
  liste.removeChild(item)
}
