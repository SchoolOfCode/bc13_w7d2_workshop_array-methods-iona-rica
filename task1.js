const cats = ["tony", "daisy", "socks", "rockie" ];

const capitalisedCats = cats.map(upperCase)

function upperCase(cat){
return cat.toUpperCase()
}
console.log(cats)
console.log(capitalisedCats)