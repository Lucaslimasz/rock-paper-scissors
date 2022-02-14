import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > img{
    margin-top: 60px;
    width: 80%;
  }
`;
