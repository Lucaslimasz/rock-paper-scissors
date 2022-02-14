import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --background: #181E40;
    --text: #fff;

    --grey-700: #524E65;
    --grey-200: #5B6984;
    --grey-100: #E4E4E4;

    --blue-dark: #324594;
    
    --blue: #4F6BF3;
    --yellow: #EDA218;
    --red: #DF405E;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }
  
  body {
    font-family: Roboto, sans-serif;
    background: var(--background);
    color: var(--text);
  }
  
  button {
    cursor: pointer;
    background: transparent;
    -webkit-appearance: none;
  }
  
  button, input {
    border: none;
    outline: 0;
    color: var(--text);
  }
  @media (max-width: 1000px){
    html{
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }

  .react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);
    
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 0;
  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 1.5rem 2rem 2.5rem;
    position: relative;
    border-radius: 0.24rem;
  }
`;
