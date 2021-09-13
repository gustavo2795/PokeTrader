export function CalcutateTradeIsFair(player1, player2) {
  const sumPlayer1 = player1.map(
    item => item.baseXp
  ).reduce((prev, next) => prev + next);

  const sumPlayer2 = player2.map(
    item => item.baseXp
  ).reduce((prev, next) => prev + next);
  
  //The Trade is fair if the diference is less than 50.
  if (Math.abs(sumPlayer1 - sumPlayer2) <= 50) {
    return true;
  }
  return false;
}