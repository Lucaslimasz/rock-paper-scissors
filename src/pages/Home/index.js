import { useState } from "react";

import Score from "../../components/Score";
import SelectOption from "../../components/SelectOption";
import Footer from "../../components/Footer";
import ModalRules from "../../components/ModalRules";

import * as S from "./styles";

export default function Home() {
  const [isModalRules, setIsModalRules] = useState(false);

  const handleCloseModalRules = () => {
    setIsModalRules(false)
  }

  return (
    <>
      <S.Container>
        <Score />
        <SelectOption />
        <Footer setIsModalRules={setIsModalRules}/>
      </S.Container>
      <ModalRules isOpen={isModalRules} onRequestClose={handleCloseModalRules} />
    </>
  );
}
