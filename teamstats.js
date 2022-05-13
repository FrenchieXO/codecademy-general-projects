const team = {
    _players:[
      {firstName: 'ronaldo', lastName: 'cristiano', age: 29},
      {firstName: 'messi', lastName: 'lionel', age: 27},
      {firstName: 'rooney', lastName: 'wayne', age: 35}
    ],
    _games: [
      {opponent: 'barcelona', teamPoints: 3, opponentPoints: 2},
      {opponent: 'manutd', teamPoints: 2, opponentPoints: 1},
      {opponent: 'chelsea', teamPoints: 5, opponentPoints: 7}
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
    }
    this.players.push(player)
  },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }
      this.games.push(game)
    }
  }
  
  team.addPlayer('bugs', 'bunny', 26)
  team.addGame('arsenal', 3, 1)
  console.log(team.players)
  console.log(team.games)
