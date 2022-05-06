const bobsFollowers = ['John', 'Tim', 'Stan', 'Jeremy', 'Long']

const tinasFollowers = ['Angel', 'John', 'Victor', 'Long']

const mutualFollowers = []

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i])
    }
  }

}

console.log(mutualFollowers)