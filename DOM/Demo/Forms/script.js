
const myForms = document.forms

console.log('myForm :>> ', myForms);


console.log('myForm :>> ', myForms[0]);
console.log('myForm :>> ', myForms['coordonnees']);
console.log('myForm :>> ', myForms.coordonnees);


const coordonnees = document.forms.coordonnees

console.log('coordonnees :>> ', coordonnees);
console.log('coordonnees.name :>> ', coordonnees.name.value);
console.log('coordonnees.name :>> ', coordonnees[0].value);
console.log('coordonnees.name :>> ', coordonnees['name'].value);

coordonnees.name.value = "Lucas"

coordonnees.reset()

coordonnees.pays.focus()
