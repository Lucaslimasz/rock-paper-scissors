import Paper from "../../assets/icon-paper.svg";
import Rock from "../../assets/icon-rock.svg";
import Scissors from "../../assets/icon-scissors.svg";

import * as S from "./styles";

export default function ButtonIcon({ color, type, className }) {
  return (
    <S.Container color={color} className={className}>
      <button>
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
