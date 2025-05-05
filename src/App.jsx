import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import styled from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import { FaArrowUp } from 'react-icons/fa';

const AppContainer = styled.div`
  background: var(--background);
  color: var(--text);
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 20%, rgba(98, 252, 241, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(98, 252, 241, 0.05) 0%, transparent 50%),
      linear-gradient(135deg, rgba(102, 252, 241, 0.03) 0%, transparent 50%, rgba(102, 252, 241, 0.02) 100%);
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      repeating-linear-gradient(
        45deg,
        transparent 0px,
        transparent 1px,
        rgba(102, 252, 241, 0.02) 1px,
        rgba(102, 252, 241, 0.02) 2px
      );
    pointer-events: none;
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const ScrollToTop = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
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
  
  &:hover {
    transform: translateY(-3px);
    background: var(--primary-dark);
  }
`;

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ThemeProvider>
      <ParallaxProvider>
        <Router>
          <AppContainer>
            <ContentWrapper>
              <Navbar />
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <About />
                    <Blog />
                    <Projects />
                    <Experience />
                    <Contact />
                    <Footer />
                  </>
                } />
                <Route path="/blog/:day" element={<BlogPost />} />
              </Routes>
              <ScrollToTop onClick={scrollToTop}>
                <FaArrowUp />
              </ScrollToTop>
              <MusicPlayer />
            </ContentWrapper>
          </AppContainer>
        </Router>
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App; 