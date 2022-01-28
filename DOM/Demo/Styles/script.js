const article = document.getElementById('article')

console.log('article :>> ', article);

article.style.backgroundColor = "rgb(11, 55, 122)"
article.style.border = "2px solid red"

console.log(article.style.border);
console.log(getComputedStyle(article).color);