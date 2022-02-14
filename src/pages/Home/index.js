import { useCallback, useState } from "react";

import Score from "../../components/Score";
import SelectOption from "../../components/SelectOption";
import GameResult from "../../components/GameResult";
import Footer from "../../components/Footer";
import ModalRules from "../../components/ModalRules";

import * as S from "./styles";

export default function Home() {
  const [isModalRules, setIsModalRules] = useState(false);
  const [optionSelected, setOptionSelected] = useState("");
  const [score, setScore] = useState(0);

  const handleCloseModalRules = () => {
    setIsModalRules(false);
  };

  const handleOptionSelected = (props) => {
    setOptionSelected(props);
  };

  const handleScoreValue = useCallback((props) => {
    if (props === "player") {
      setScore((prevState) => prevState + 3);
    } else if (props === "computer") {
      setScore((prevState) => prevState - 2);
    } else {
      return;
    }
  }, []);

  return (
    <>
      <S.Container>
        <Score score={score} />
        {optionSelected ? (
          <GameResult
            optionSelected={optionSelected}
            handleOptionSelected={handleOptionSelected}
            handleScoreValue={handleScoreValue}
          />
        ) : (
          <SelectOption handleOption={handleOptionSelected} />
        )}
        <Footer setIsModalRules={setIsModalRules} />
      </S.Container>
      <ModalRules
        isOpen={isModalRules}
        onRequestClose={handleCloseModalRules}
      />
    </>
  );
}
