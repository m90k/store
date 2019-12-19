import { createGlobalStyle } from 'styled-components';
import bg from '../assets/images/bg.svg';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #191919;
    background-image: url(${bg});
    background-position-x: center;
    background-position-y: top;
    background-repeat: no-repeat;
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
  }

  #root{
    max-width: 1020px;
    margin: 0 auto;
    padding: 20px;
  }

  button{
    cursor: pointer;
  }

  button, input, body{
    font-size: 1rem;
  }
`;
