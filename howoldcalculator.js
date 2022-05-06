const howOld = (age, year) => {
    const currentYear = 2022;
    const yearOfBirth = currentYear - age;
    const calculatedAge = year - yearOfBirth;
    if (calculatedAge < 0) {
      return `The year ${year} was ${Math.abs(
        calculatedAge
      )} years before you were born`;
    } else if (calculatedAge > 0 && year < currentYear) {
      return `You were ${calculatedAge} in the year ${year}`;
    } else if (calculatedAge > 0 && year > currentYear) {
      return `You will be ${calculatedAge} in the year ${year}`;
    }
  };
  
  console.log(howOld(30, 2060));
  
  const animal = 'cat'
