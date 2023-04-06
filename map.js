
//Mapping Array
const array5 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array5.map(x => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]   

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction) //creates a new array using map() for each elements of array
console.log(newArr);

function myFunction(num) {
  return num * 10;
}

const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  console.log(persons.map(getFullName));
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }