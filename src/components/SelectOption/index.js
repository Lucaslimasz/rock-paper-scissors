import ButtonIcon from "../ButtonIcon";

import * as S from "./styles";

export default function SelectOption() {
  return (
    <S.Container>
      <ButtonIcon type="Paper" color="var(--blue)" className="paper" />
      <ButtonIcon type="Rock" color="var(--red)" className="rock" />
      <ButtonIcon type="Scissors" color="var(--yellow)" className="scissors" />
    </S.Container>
  );
}
