import { useCallback } from "react";

import * as S from "./styles";

export default function Footer({setIsModalRules}) {
  
  const handleIsModalRules = useCallback(() => {
    setIsModalRules(prevState => !prevState)
  },[])

  return (
    <S.Container>
      <button onClick={handleIsModalRules}>Regras</button>
    </S.Container>
  );
}
