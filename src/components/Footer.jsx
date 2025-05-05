import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: var(--surface);
  padding: 2rem 10%;
  border-top: 1px solid rgba(98, 252, 241, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 0.5rem;

  a {
    width: 40px;
    height: 40px;
    background: rgba(98, 252, 241, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    font-size: 1.2rem;
    transition: all 0.3s ease;

    &:hover {
      background: var(--primary);
      color: var(--background);
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: var(--text);
  opacity: 0.8;
  font-size: 0.9rem;

  p {
    margin: 0.5rem 0;
  }

  .highlight {
    color: var(--primary);
    font-weight: 500;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <a href="https://https://github.com/jacoco17" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/john-perez-01ba821a0/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:johnrivero217@gmail.com">
            <FaEnvelope />
          </a>
        </SocialLinks>
        <Copyright>
          <p>© {new Date().getFullYear()} John Francis Rivero. All rights reserved.</p>
          <p>Designed and built with <span className="highlight">React</span> & <span className="highlight">Styled Components</span></p>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 