import styled from 'styled-components';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background: rgba(11, 12, 16, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  z-index: 1000;
  border-bottom: 1px solid rgba(98, 252, 241, 0.1);

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary);
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    text-shadow: 0 0 10px rgba(102, 252, 241, 0.5);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: ${props => props['data-isopen'] === 'true' ? '0' : '-100%'};
    width: 100%;
    height: calc(100vh - 70px);
    background: rgba(11, 12, 16, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    transition: left 0.3s ease;
  }
`;

const NavLink = styled(Link)`
  cursor: pointer;
  font-size: 1rem;
  color: var(--text);
  position: relative;
  transition: all 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--primary);
    &:after {
      width: 100%;
    }
  }

  &.active {
    color: var(--primary);
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 1rem 0;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--primary);
    background: rgba(98, 252, 241, 0.1);
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>COJA</Logo>
      <MobileMenuButton onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MobileMenuButton>
      <NavLinks data-isopen={isOpen.toString()}>
        <NavLink to="home" spy={true} smooth={true} duration={500} activeClass="active" onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="blog" spy={true} smooth={true} duration={500} activeClass="active" onClick={() => setIsOpen(false)}>Blog</NavLink>
        <NavLink to="projects" spy={true} smooth={true} duration={500} activeClass="active" onClick={() => setIsOpen(false)}>Projects</NavLink>
        <NavLink to="experience" spy={true} smooth={true} duration={500} activeClass="active" onClick={() => setIsOpen(false)}>Experience</NavLink>
        <NavLink to="contact" spy={true} smooth={true} duration={500} activeClass="active" onClick={() => setIsOpen(false)}>Contact</NavLink>
        <ThemeToggle onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
      </NavLinks>
    </Nav>
  );
};

export default Navbar; 