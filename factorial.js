function factorial(num) {
    var result = num;
    while (num > 1) { 
      num--; 
      result = result * num
  }
  return result
  }
  
  console.log(factorial (20))