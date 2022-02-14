import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4.375rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 1.5rem;
      text-transform: uppercase;
      font-size: 1.5rem;
    }

    div {
      div {
        width: 12rem;
        height: 12rem;
        border-radius: 7rem;
      }
    }
  }

  @media (max-width: 920px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    position: relative;
    gap: 2rem;
    div {
      div {
        div {
          width: 7rem;
          height: 7rem;
        }
      }
    }
  }
`;

export const PlayResult = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 2.2rem;
    text-transform: uppercase;
  }

  button {
    width: 100%;
    padding: 1rem 0;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 0.375rem;

    background-color: #f7f7f7;
    color: var(--background);
    ${({ defeat }) => defeat && "color: var(--red);"}
    margin-top: 1rem;
  }

  @media (max-width: 920px) {
    position: absolute;
    width: 300px;
    bottom: 20px;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

export const LoadingOptionComputer = styled.div`
  width: 15.5rem;
  height: 15.5rem;
  background: #15153d;
  border-radius: 100%;
  border: 2.5rem solid var(--background);

  @media (max-width: 920px){
    width: 9rem;
    height: 9rem;
    border: 1rem solid var(--background);
  }
`;
