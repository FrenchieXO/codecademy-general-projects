const finalGrade = (scoreOne, scoreTwo, scoreThree) => {
    const averageScore = (scoreOne + scoreTwo + scoreThree) / 3;
    if (scoreOne < 0 || scoreOne >100 || scoreTwo < 0 || scoreTwo >100 || scoreThree < 0 || scoreThree >100){
      return 'You have entered an invalid grade.'
    }
    else if (averageScore >= 0 && averageScore <= 59){
    return 'F'}
    else if (averageScore >= 60 && averageScore <= 69){
    return 'D'}
    else if (averageScore >= 70 && averageScore <= 79){
    return 'C'}
    else if (averageScore >= 80 && averageScore <= 89){
    return 'B'}
    else if (averageScore >= 90 && averageScore <= 100){
    return 'A'}
    
  }
  

  console.log(finalGrade(180, 92, 95))



  