const rollTheDice = () => {
    let die1 = Math.floor((Math.random() * 6) + 1);
    let die2 = Math.floor((Math.random() * 6) + 1);
    console.log(`computer threw ${die1} and ${die2}`);
    return die1 + die2
  
  };
  
  console.log(rollTheDice());
  