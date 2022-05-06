const input = "i live in lagos";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log(i)
  for (let z = 0; z < 1; z++) {
    //doubles the 'e'
    if (input[i] === "e") {
      resultArray.push(input[i]);
    }
    for (let y = 0; y < 1; y++) {
      //doubles the 'u'
      if (input[i] === "u") {
        resultArray.push(input[i]);
      }
    }
  }
  for (let j = 0; j < vowels.length; j++) {
    //console.log(j)
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}


const resultString = resultArray.join('').toUpperCase()

console.log(resultString)
