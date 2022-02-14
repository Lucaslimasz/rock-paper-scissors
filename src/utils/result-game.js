export const ResultGame = (player, computer) => {
  if (player === computer) {
    return "tie";
  } else if (player === "Rock" && computer === "Paper") {
    return "computer";
  } else if (player === "Paper" && computer === "Scissors") {
    return "computer";
  } else if (player === "Scissors" && computer === "Rock") {
    return "computer";
  } else if (player === "Paper" && computer === "Rock") {
    return "player";
  } else if (player === "Scissors" && computer === "Paper") {
    return "player";
  } else if (player === "Rock" && computer === "Scissors") {
    return "player";
  }
};
