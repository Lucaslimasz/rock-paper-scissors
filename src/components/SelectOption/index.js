import ButtonIcon from "../ButtonIcon";

import * as S from "./styles";

export default function SelectOption({ handleOption }) {
  return (
    <S.Container>
      <ButtonIcon
        type="Paper"
        className="paper"
        onClick={() => handleOption("Paper")}
      />
      <ButtonIcon
        type="Rock"
        className="rock"
        onClick={() => handleOption("Rock")}
      />
      <ButtonIcon
        type="Scissors"
        className="scissors"
        onClick={() => handleOption("Scissors")}
      />
    </S.Container>
  );
}
