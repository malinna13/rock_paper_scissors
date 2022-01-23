"use strict";

const options = ["Камень", "Ножницы", "Бумага"];

alert("Игра начинается");

let playerCounter = 0,
  botCounter = 0;

while (playerCounter < 3 && botCounter < 3) {
  let playerOption = prompt("Выберите что-то: Камень, Ножницы, Бумага");
  let botOption = options[Math.floor(Math.random() * options.length)];

  if (playerOption === botOption) {
    playerCounter++;
    botCounter++;
    alert(
      `${playerOption} - ${botOption}. Ничья. ${playerCounter}:${botCounter} `
    );
  } else {
    if (
      (playerOption === "Камень" && botOption === "Ножницы") ||
      (playerOption === "Ножницы" && botOption === "Бумага") ||
      (playerOption === "Бумага" && botOption === "Камень")
    ) {
      playerCounter++;
      alert(
        `${playerOption} - ${botOption}. Побеждает игрок. ${playerCounter}:${botCounter} `
      );
    } else {
      botCounter++;
      alert(
        `${playerOption} - ${botOption}. Побеждает бот. ${playerCounter}:${botCounter} `
      );
    }
  }
}
if (playerCounter === botCounter) {
  alert(`Конец игры - ничья. ${playerCounter}:${botCounter} `);
} else if (playerCounter > botCounter) {
  alert(`Конец игры - побеждает игрок. ${playerCounter}:${botCounter}`);
} else {
  alert(`Конец игры - побеждает бот. ${playerCounter}:${botCounter}`);
}
