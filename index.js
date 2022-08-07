// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
  console.log(name);

}

function destructivelyPrependCat(name) {
  cats.unshift(name)
console.log(name);

}

function destructivelyRemoveLastCat(name) {
  cats.pop(name)
console.log(name);

}

function destructivelyRemoveFirstCat(name) {
  cats.shift(name)
console.log(name);

}

function appendCat(name) {
  var name_1 = [...cats, name];
  return name_1;
}

function prependCat(name) {
  var name_2 = [name,... cats];
  return name_2;

}

function removeLastCat() {
  var newCats = cats.slice(0,cats.length-1);
  return newCats;
}

function removeFirstCat() {
  var newCats = cats.slice(1);
  return newCats;
}