import { useState } from "react";

import Score from "../../components/Score";
import SelectOption from "../../components/SelectOption";
import GameResult from "../../components/GameResult";
import Footer from "../../components/Footer";
import ModalRules from "../../components/ModalRules";

import * as S from "./styles";

export default function Home() {
  const [isModalRules, setIsModalRules] = useState(false);
  const [optionSelected, setOptionSelected] = useState("");

  const handleCloseModalRules = () => {
    setIsModalRules(false);
  };

  const handleOptionSelected = (props) => {
    setOptionSelected(props);
  };

  return (
    <>
      <S.Container>
        <Score />
        {optionSelected ? (
          <GameResult
            optionSelected={optionSelected}
            handleOptionSelected={handleOptionSelected}
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
