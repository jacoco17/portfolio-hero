import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #66FCF1;
    --primary-dark: #45B1A8;
    --background: #0B0E10;
    --surface: #11151A;
    --text: #A4B1CD;
    --heading: #FFFFFF;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--background);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    color: var(--heading);
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  .section-subtitle {
    color: var(--text);
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }

  section {
    padding: 100px 10%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
      padding: 80px 5%;
    }
  }

  .scroll-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: var(--primary);
    color: var(--background);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    z-index: 999;
    
    &:hover {
      transform: translateY(-3px);
      background: var(--primary-dark);
    }

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      bottom: 1.5rem;
      right: 1.5rem;
    }
  }

  /* Slick Carousel Custom Styles */
  .slick-dots {
    bottom: -40px;

    li {
      margin: 0;

      button:before {
        color: var(--primary);
        opacity: 0.25;
        font-size: 8px;
      }

      &.slick-active button:before {
        opacity: 1;
        color: var(--primary);
      }
    }
  }

  .slick-slide {
    &:focus {
      outline: none;
    }
  }
`;

export default GlobalStyles; 