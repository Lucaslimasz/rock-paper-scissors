import { useEffect, useState } from "react";

import { ResultGame } from "../../utils/result-game";
import ButtonIcon from "../ButtonIcon";

import * as S from "./styles";

export default function GameResult({ optionSelected, handleOptionSelected }) {
  const [computerSelected, setComputerSelected] = useState("");
  const [resultGame, setResultGame] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const OptionsInNumber = Math.floor(Math.random() * 3) + 1;
      if (OptionsInNumber === 1) {
        setComputerSelected("Paper");
      } else if (OptionsInNumber === 2) {
        setComputerSelected("Rock");
      } else if (OptionsInNumber === 3) {
        setComputerSelected("Scissors");
      }
    }, 1500); // 1,5 secundos
  }, []);

  useEffect(() => {
    const response = ResultGame(optionSelected, computerSelected);
    setResultGame(response);
  }, [computerSelected, optionSelected]);

  return (
    <S.Container>
      <div>
        <h1>Você</h1>
        <ButtonIcon type={optionSelected} />
      </div>
      {resultGame && (
        <S.PlayResult defeat={resultGame === "computer"}>
          {resultGame === "tie" && <h1>Jogo empatado</h1>}
          {resultGame === "player" && <h1>Você ganhou ;D</h1>}
          {resultGame === "computer" && <h1>Você perdeu :(</h1>}
          <button onClick={() => handleOptionSelected("")}>
            Jogar Novamente
          </button>
        </S.PlayResult>
      )}
      <div>
        <h1>Computador</h1>
        {computerSelected ? (
          <ButtonIcon type={computerSelected} />
        ) : (
          <S.LoadingOptionComputer />
        )}
      </div>
    </S.Container>
  );
}
