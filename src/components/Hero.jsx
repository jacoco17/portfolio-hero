import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaPhp, FaLaravel, FaJs, FaPython, FaDatabase, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import { FaReact } from 'react-icons/fa6';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 10%;
  background: var(--background);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 20%, rgba(102, 252, 241, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(102, 252, 241, 0.05) 0%, transparent 50%),
      linear-gradient(135deg, rgba(102, 252, 241, 0.03) 0%, transparent 50%, rgba(102, 252, 241, 0.02) 100%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: radial-gradient(
      circle at top right,
      rgba(102, 252, 241, 0.05) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4.5rem 5% 2rem;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    padding: 5rem 1rem 2rem;
  }

  @media (max-width: 380px) {
    padding: 5.5rem 1rem 1rem;
  }

  @media (max-height: 667px) {
    padding-top: 6rem;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: -2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    margin-top: 0;
  }

  @media (max-width: 480px) {
    gap: 1.8rem;
  }

  @media (max-width: 380px) {
    gap: 1.5rem;
  }
`;

const LeftContent = styled.div`
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const RightContent = styled.div`
  position: relative;

  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.5rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: var(--heading);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 380px) {
    font-size: 1.8rem;
    line-height: 1.2;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  text-align: left;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 3px;
    background: linear-gradient(
      90deg,
      var(--primary) 0%,
      rgba(102, 252, 241, 0.3) 100%
    );
    box-shadow: 0 0 15px rgba(102, 252, 241, 0.5);
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.2rem;
    width: 100%;

    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media (max-width: 380px) {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
  }
`;

const Description = styled(motion.p)`
  color: var(--text);
  margin-bottom: 2rem;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ContactContainer = styled.div`
  background: var(--surface);
  padding: 1.2rem;
  border-radius: 10px;
  border: 1px solid rgba(98, 252, 241, 0.1);
  margin-bottom: 2rem;
  width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.9rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 380px) {
    padding: 0.8rem;
    margin-bottom: 1.2rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  color: var(--text);
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
  
  &:last-child {
    margin-bottom: 0;
  }

  svg {
    color: var(--primary);
    font-size: 1.1rem;
    flex-shrink: 0;
    margin-top: 0.2rem;
  }

  span {
    word-break: break-all;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  @media (max-width: 380px) {
    gap: 0.5rem;
    font-size: 0.75rem;
    margin-bottom: 0.8rem;

    svg {
      font-size: 0.9rem;
      margin-top: 0.15rem;
    }

    span {
      font-size: 0.75rem;
      line-height: 1.3;
    }
  }
`;

const CodeSnippet = styled(motion.div)`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(98, 252, 241, 0.1);
  font-family: 'Fira Code', monospace;
  color: var(--text);
  position: relative;
  width: 100%;

  &:before {
    content: '// Portfolio Info';
    color: #45A29E;
    margin-bottom: 1rem;
    display: block;
  }

  .code-line {
    margin: 0.5rem 0;
  }

  .property {
    color: #66FCF1;
  }

  .string {
    color: #45A29E;
  }

  @media (max-width: 380px) {
    padding: 1rem;
    font-size: 0.85rem;

    .code-line {
      margin: 0.3rem 0;
      white-space: pre-wrap;
      word-break: break-word;
    }
  }
`;

const TechStack = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 380px) {
    gap: 0.5rem;
    margin-top: 1.5rem;
  }
`;

const TechBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--surface);
  border: 1px solid rgba(98, 252, 241, 0.1);
  border-radius: 8px;
  color: var(--text);
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary);
    transform: translateY(-2px);
  }

  svg {
    color: var(--primary);
    font-size: 1.2rem;
  }

  @media (max-width: 380px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    gap: 0.3rem;

    svg {
      font-size: 1rem;
    }
  }
`;

const GlitchText = styled.span`
  position: relative;
  display: inline-block;
  animation: glitch-skew 1s infinite linear alternate-reverse;

  &::before,
  &::after {
    content: "John Francis Rivero";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(44px, 450px, 56px, 0);
  }

  &::before {
    left: 2px;
    text-shadow: -2px 0 var(--primary);
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }

  &::after {
    left: -2px;
    text-shadow: -2px 0 #ff00ff;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
  }

  @keyframes glitch-anim {
    0% {
      clip: rect(19px, 9999px, 39px, 0);
      transform: skew(0.52deg);
    }
    5% {
      clip: rect(36px, 9999px, 99px, 0);
      transform: skew(0.03deg);
    }
    10% {
      clip: rect(91px, 9999px, 61px, 0);
      transform: skew(0.95deg);
    }
    15% {
      clip: rect(43px, 9999px, 24px, 0);
      transform: skew(0.53deg);
    }
    20% {
      clip: rect(76px, 9999px, 92px, 0);
      transform: skew(0.06deg);
    }
    25% {
      clip: rect(23px, 9999px, 22px, 0);
      transform: skew(0.01deg);
    }
    30% {
      clip: rect(54px, 9999px, 79px, 0);
      transform: skew(0.84deg);
    }
    35% {
      clip: rect(26px, 9999px, 87px, 0);
      transform: skew(0.46deg);
    }
    40% {
      clip: rect(46px, 9999px, 98px, 0);
      transform: skew(0.05deg);
    }
    45% {
      clip: rect(82px, 9999px, 31px, 0);
      transform: skew(0.49deg);
    }
    50% {
      clip: rect(33px, 9999px, 54px, 0);
      transform: skew(0.07deg);
    }
    55% {
      clip: rect(67px, 9999px, 71px, 0);
      transform: skew(0.23deg);
    }
    60% {
      clip: rect(89px, 9999px, 27px, 0);
      transform: skew(0.42deg);
    }
    65% {
      clip: rect(17px, 9999px, 93px, 0);
      transform: skew(0.8deg);
    }
    70% {
      clip: rect(37px, 9999px, 46px, 0);
      transform: skew(0.51deg);
    }
    75% {
      clip: rect(72px, 9999px, 67px, 0);
      transform: skew(0.33deg);
    }
    80% {
      clip: rect(95px, 9999px, 34px, 0);
      transform: skew(0.4deg);
    }
    85% {
      clip: rect(42px, 9999px, 84px, 0);
      transform: skew(0.86deg);
    }
    90% {
      clip: rect(56px, 9999px, 96px, 0);
      transform: skew(0.11deg);
    }
    95% {
      clip: rect(64px, 9999px, 35px, 0);
      transform: skew(0.67deg);
    }
    100% {
      clip: rect(31px, 9999px, 91px, 0);
      transform: skew(0.19deg);
    }
  }

  @keyframes glitch-anim2 {
    0% {
      clip: rect(65px, 9999px, 99px, 0);
      transform: skew(0.03deg);
    }
    5% {
      clip: rect(86px, 9999px, 32px, 0);
      transform: skew(0.73deg);
    }
    10% {
      clip: rect(47px, 9999px, 94px, 0);
      transform: skew(0.66deg);
    }
    15% {
      clip: rect(82px, 9999px, 39px, 0);
      transform: skew(0.95deg);
    }
    20% {
      clip: rect(19px, 9999px, 71px, 0);
      transform: skew(0.05deg);
    }
    25% {
      clip: rect(36px, 9999px, 95px, 0);
      transform: skew(0.39deg);
    }
    30% {
      clip: rect(74px, 9999px, 28px, 0);
      transform: skew(0.01deg);
    }
    35% {
      clip: rect(89px, 9999px, 55px, 0);
      transform: skew(0.56deg);
    }
    40% {
      clip: rect(26px, 9999px, 87px, 0);
      transform: skew(0.34deg);
    }
    45% {
      clip: rect(58px, 9999px, 43px, 0);
      transform: skew(0.22deg);
    }
    50% {
      clip: rect(93px, 9999px, 68px, 0);
      transform: skew(0.48deg);
    }
    55% {
      clip: rect(44px, 9999px, 97px, 0);
      transform: skew(0.77deg);
    }
    60% {
      clip: rect(71px, 9999px, 24px, 0);
      transform: skew(0.15deg);
    }
    65% {
      clip: rect(33px, 9999px, 91px, 0);
      transform: skew(0.83deg);
    }
    70% {
      clip: rect(82px, 9999px, 59px, 0);
      transform: skew(0.26deg);
    }
    75% {
      clip: rect(67px, 9999px, 35px, 0);
      transform: skew(0.41deg);
    }
    80% {
      clip: rect(51px, 9999px, 84px, 0);
      transform: skew(0.94deg);
    }
    85% {
      clip: rect(96px, 9999px, 46px, 0);
      transform: skew(0.18deg);
    }
    90% {
      clip: rect(28px, 9999px, 78px, 0);
      transform: skew(0.63deg);
    }
    95% {
      clip: rect(73px, 9999px, 92px, 0);
      transform: skew(0.37deg);
    }
    100% {
      clip: rect(42px, 9999px, 56px, 0);
      transform: skew(0.52deg);
    }
  }

  @keyframes glitch-skew {
    0% {
      transform: skew(-2deg);
    }
    10% {
      transform: skew(1deg);
    }
    20% {
      transform: skew(4deg);
    }
    30% {
      transform: skew(-3deg);
    }
    40% {
      transform: skew(2deg);
    }
    50% {
      transform: skew(-1deg);
    }
    60% {
      transform: skew(3deg);
    }
    70% {
      transform: skew(-2deg);
    }
    80% {
      transform: skew(1deg);
    }
    90% {
      transform: skew(-4deg);
    }
    100% {
      transform: skew(0deg);
    }
  }
`;

const AnimatedTitle = styled(motion.div)`
  position: relative;
  display: inline-block;
`;

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const techStack = [
    { icon: <FaPhp />, name: 'PHP' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaDatabase />, name: 'MySQL' },
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3 />, name: 'CSS' },
    { icon: <SiDjango />, name: 'Django' },
  ];

  return (
    <HeroSection id="home">
      <HeroContent>
        <LeftContent>
          <AnimatedTitle
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            <Title>
              <GlitchText>John Francis Rivero</GlitchText>
            </Title>
          </AnimatedTitle>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full Stack Developer
          </Subtitle>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            IT Student and aspiring full-stack developer from Zamboanga City, Philippines. 
            Passionate about creating modern web applications with React.js and Node.js.
          </Description>
          <TechStack>
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              >
                <TechBadge>
                  {tech.icon}
                  <span>{tech.name}</span>
                </TechBadge>
              </motion.div>
            ))}
          </TechStack>
        </LeftContent>
        <RightContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactContainer>
              <ContactItem>
                <FaMapMarkerAlt />
                <span>Zamboanga City, Philippines</span>
              </ContactItem>
              <ContactItem>
                <FaEnvelope />
                <span>johnrivero217@gmail.com</span>
              </ContactItem>
              <ContactItem>
                <FaGithub />
                <span>https://github.com/jacoco17</span>
              </ContactItem>
            </ContactContainer>
          </motion.div>
          <CodeSnippet
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="code-line">const <span className="property">developer</span> = {'{'}</div>
            <div className="code-line">&nbsp;&nbsp;name: <span className="string">'John Francis'</span>,</div>
            <div className="code-line">&nbsp;&nbsp;skills: [<span className="string">'PHP'</span>, <span className="string">'React'</span>, <span className="string">'JavaScript'</span>],</div>
            <div className="code-line">&nbsp;&nbsp;passion: <span className="string">'Building modern web apps'</span>,</div>
            <div className="code-line">&nbsp;&nbsp;status: <span className="string">'IT Student'</span></div>
            <div className="code-line">{'};'}</div>
          </CodeSnippet>
        </RightContent>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 