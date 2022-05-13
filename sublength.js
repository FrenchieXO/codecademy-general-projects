const subLength = (string, char) => {
    stringArray = string.split('');
    numChar = stringArray.filter(x => x === char).length;
    //console.log(numChar)
    firstCharIndex = stringArray.indexOf(char);
    //console.log(firstCharIndex)
    secondCharIndex = stringArray.lastIndexOf(char);
    let target;
    //console.log(secondCharIndex)
    if(numChar < 2 || numChar > 2 ) {
      target =  0
    } else {
      target = secondCharIndex - firstCharIndex + 1
    }
    return target
    
  
  }
  
  console.log(subLength('appropriate', 'r'))