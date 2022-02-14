import ReactModal from "react-modal";

import ImageRules from "../../assets/image-rules.svg";
import Close from "../../assets/icon-close.svg";

import * as S from "./styles";

export default function ModalRules({ isOpen, onRequestClose }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.Container>
        <div>
          <h1>Regras</h1>
          <button onClick={onRequestClose}>
            <img src={Close} alt="" />
          </button>
        </div>
        <img src={ImageRules} alt="Rules" />
      </S.Container>
    </ReactModal>
  );
}
