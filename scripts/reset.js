function rebootReset() {
  game.rebootNum = D(0);
  game.durability = D(1).mul(game.researchLevel[5]+1);
  if (!game.programActive[4]) {
    for (var i = 0; i < game.programActive.length; i++) {
      game.programActive[i] = 0;
    }
    game.base = D(2);
  }
  if (!game.programActive[4] || game.shopBought[2] < 2) game.digits = D(1);
  if (!game.programActive[4] || game.shopBought[2] < 2) game.number = D(0);
  if (!game.programActive[4] || game.shopBought[2] < 3) game.money = D(0);
  if (!game.programActive[4] || game.shopBought[2] < 3) game.shopBought[5] = 0;
}

function quantumReset() {
  game.programActive[4] = false;
  rebootReset();
  game.researchPoint = D(0);
  for (var i = 0; i < 9; i++) {
    game.researchProgress[i] = 0;
    game.researchLevel[i] = 0;
    game.researchSpeed[i] = 0;
  }
  for (var i = 0; i < 15; i++) {
    game.shopBought[i] = 0;
  }
  if (game.quantumUpgradeBought.includes('41') && game.researchLevel[1] < 2) game.researchLevel[1] = 2; 
}
