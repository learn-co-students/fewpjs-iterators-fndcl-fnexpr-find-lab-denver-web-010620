const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(games) {
  let game_won = games.find(game => {return game.result === "W"})
  if(game_won === undefined) {
    return undefined
  } else {
    return game_won.year
  }
}