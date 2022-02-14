import styled from "styled-components";

export const Container = styled.div`
  button {
    background-color: transparent;
    border: 1.625rem solid ${({ color }) => color};
    border-radius: 100%;

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 4.6875rem;
      width: 9.375rem;
      height: 9.375rem;
      background: #e4e4e4;
    }
  } 

  &:active{
    position: relative;
    top: 3px;
    left: 3px;
  }
`;
