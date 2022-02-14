import { useEffect, useState } from "react";
import Paper from "../../assets/icon-paper.svg";
import Rock from "../../assets/icon-rock.svg";
import Scissors from "../../assets/icon-scissors.svg";

import * as S from "./styles";

export default function ButtonIcon({ type, className, onClick }) {
  const [color, setColor] = useState();

  useEffect(() => {
    if (type === "Paper") {
      setColor("var(--yellow)");
    } else if (type === "Scissors") {
      setColor("var(--blue)");
    } else if (type === "Rock") {
      setColor("var(--red)");
    }
  }, [type]);

  return (
    <S.Container color={color} className={className}>
      <button onClick={onClick}>
        {type === "Paper" && (
          <div>
            <img src={Paper} alt="" />
          </div>
        )}
        {type === "Rock" && (
          <div>
            <img src={Rock} alt="" />
          </div>
        )}
        {type === "Scissors" && (
          <div>
            <img src={Scissors} alt="" />
          </div>
        )}
      </button>
    </S.Container>
  );
}
