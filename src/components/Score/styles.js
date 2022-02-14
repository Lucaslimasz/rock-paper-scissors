import styled from "styled-components";

export const Container = styled.div`
  width: 720px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5rem;
  padding: 1.25rem 2rem;
  border: 0.25rem solid var(--grey-200);
  border-radius: 1.5rem;

  ul {
    li {
      font-size: 2.2rem;
      text-transform: uppercase;
      font-weight: 900;
      line-height: 1.875rem;
      text-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
    }
  }

  div {
    padding: 1.25rem 2.875rem;
    background: var(--text);
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      color: var(--blue-dark);
      font-weight: 900;
      text-transform: uppercase;
      font-size: 0.9rem;
    }
    h2 {
      color: var(--grey-700);
      font-size: 2.625rem;
      font-weight: 900;
    }
  }

  @media (max-width: 750px) {
    width: 100%;
  }

  @media (max-width: 620px) {
    div {
      padding: 1rem 1.5rem;
    }
    ul {
      li {
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 900;
        line-height: 1.875rem;
        text-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
