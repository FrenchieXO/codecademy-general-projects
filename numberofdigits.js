// Create function here 

const numberDigits = value => {
    const absValue = Math.abs(value)
    const stringValue = absValue.toString();
    const valueLength = stringValue.length;
  
    if (valueLength === 1 && value >= 0 && value < 100) {
      return `One digit: ${value}`
    } 
    else if (valueLength === 2 && value >= 0 && value < 100) {
      return `Two digits: ${value}`
    } 
    else  {
      return `The number is: ${value}`
    }
  }
  
  console.log(numberDigits(99))