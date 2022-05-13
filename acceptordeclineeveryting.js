const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = arr => {
  arr.forEach(politelyDecline)
}



const grudginglyAccept = veg => {
  console.log(`Ok, I guess I will eat some ${veg}.`)
  }

const acceptEverything = arr => {
      arr.forEach(grudginglyAccept)
}


declineEverything(veggies)
acceptEverything(veggies)