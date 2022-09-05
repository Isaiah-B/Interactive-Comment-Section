import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Rubik', sans-serif;
    background-color: hsl(228, 33%, 97%);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100vh;
    position: relative;
  }
`;

export const Box = css`
  display: flex;
  align-items: flex-start;
  font-size: 1.6rem;
  padding: 2.6rem 2.4rem;
  border-radius: 8px;
  background-color: hsl(0, 0%, 100%);
  
`;

export const Button = css`
  font-size: 1.6rem;
  font-weight: 400;
  font-family: inherit;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  padding: 1.4rem 3rem;
  color: hsl(0, 0%, 100%);
  background-color: hsl(238, 40%, 52%);

  &:hover {
    cursor: pointer;
    opacity: 40%;
  }
`;

export const TextArea = css`
  font-family: inherit;
  font-size: 1.6rem;
  resize: none;
  width: 100%;
  padding: 1.4rem 2.4rem;
  border: 1px solid hsl(223, 19%, 93%);
  border-radius: 8px;
  cursor: pointer;
  
  &:focus {
    outline: 1px solid hsl(238, 40%, 52%);
  }
`;

export const NewCommentBox = css`
  ${Box};
  gap: 1.8rem;
  padding: 2rem 2.4rem;
  width: 100%;
`;

export const ModalBg = css`
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: hsla(0, 0%, 0%, 0.6);
  }
`;

export const Modal = css`
  display: flex;
  flex-direction: column;
  position: fixed;
  gap: 1rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 3rem 3.2rem;
  border-radius: 9px;
  background-color: hsl(0, 0%, 100%);
  
  h2 {
    font-size: 2.4rem;
    font-weight: 500;
    color: hsl(212, 24%, 26%)
  }
  
  p {
    font-size: 1.6rem;
    line-height: 1.6;
    /* color: hsl(211, 10%, 45%); */
  }

  label {
    font-size: 1.8rem;
    font-weight: 700;
  }
  
  input {
    padding: 0.6rem;
    border: 1px solid hsl(211, 10%, 45%);
    border-radius: 5px;
    width: 100%;

    &:focus {
      outline: 1px solid hsl(238, 40%, 52%);
    }
  }

  button {
    ${Button};
  }
`;
