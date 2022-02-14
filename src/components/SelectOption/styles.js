import styled from "styled-components";

import Bg from "../../assets/bg-triangle.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 80px 200px;
  grid-template-rows: repeat(2, 1fr);

  grid-row-gap: 1.875rem;

  background-image: url(${Bg});
  background-repeat: no-repeat;
  background-position: center;

  .paper {
    grid-column: 1/2;
  }

  .rock {
    grid-row: 2/3;
    margin-left: 140px;
  }

  .scissors {
    grid-column: 3/4;
  }
`;
