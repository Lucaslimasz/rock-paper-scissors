import * as S from "./styles";

export default function Score() {
  return (
    <S.Container>
      <ul>
        <li>Pedra &</li>
        <li>Papel &</li>
        <li>Tesoura</li>
      </ul>
      <div>
        <span>score</span>
        <h2>12</h2>
      </div>
    </S.Container>
  );
}
