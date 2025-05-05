import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { FaUser, FaMapMarkerAlt, FaGraduationCap, FaCode, FaLanguage, FaBriefcase } from 'react-icons/fa';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 100px 10%;
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
      radial-gradient(circle at 20% 20%, rgba(98, 252, 241, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(98, 252, 241, 0.05) 0%, transparent 50%),
      linear-gradient(135deg, rgba(102, 252, 241, 0.03) 0%, transparent 50%, rgba(102, 252, 241, 0.02) 100%);
    pointer-events: none;
  }
`;

const SectionTitle = styled(motion.div)`
  margin-bottom: 4rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 80px;
    height: 3px;
    background: linear-gradient(
      90deg,
      var(--primary) 0%,
      rgba(98, 252, 241, 0.3) 100%
    );
    box-shadow: 0 0 15px rgba(102, 252, 241, 0.5);
  }
  
  h2 {
    font-size: 2.8rem;
    color: var(--heading);
    margin-bottom: 0.5rem;
    text-align: left;
    letter-spacing: 1px;
    font-weight: 600;
  }

  .subtitle {
    color: var(--primary);
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 500;
    margin-bottom: 0.5rem;
    text-shadow: 0 0 10px rgba(102, 252, 241, 0.3);
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutText = styled(motion.div)`
  h3 {
    font-size: 1.8rem;
    color: var(--heading);
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  p {
    color: var(--text);
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
  
  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 1rem;
  }
`;

const InfoCard = styled(motion.div)`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(98, 252, 241, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .icon {
    width: 40px;
    height: 40px;
    background: rgba(98, 252, 241, 0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    color: var(--primary);
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  h4 {
    color: var(--heading);
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  p {
    color: var(--text);
    font-size: 0.95rem;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem;
    
    .icon {
      width: 35px;
      height: 35px;
      font-size: 1rem;
      margin-bottom: 0.75rem;
    }
    
    h4 {
      font-size: 1rem;
    }
    
    p {
      font-size: 0.9rem;
    }
  }
`;

const About = () => {
  const personalInfo = [
    { icon: <FaUser />, title: 'Age', value: '22' },
    { icon: <FaMapMarkerAlt />, title: 'Location', value: 'Zamboanga City, Philippines' },
    { icon: <FaGraduationCap />, title: 'Education', value: 'BS Information Technology' },
    { icon: <FaCode />, title: 'Experience', value: '2+ years in Web Development' },
    { icon: <FaLanguage />, title: 'Languages', value: 'English, Filipino' },
    { icon: <FaBriefcase />, title: 'Availability', value: 'Open for Projects' }
  ];

  return (
    <AboutSection id="about">
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="subtitle">ABOUT ME</div>
        <h2>Who Am I?</h2>
      </SectionTitle>

      <AboutContent>
        <AboutText
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>I'm a passionate Full-Stack Developer</h3>
          <p>
            Currently pursuing my IT degree while actively working on real-world projects.
            I specialize in creating responsive, user-friendly web applications using cutting-edge technologies.
            My journey in web development has been driven by a passion for creating elegant solutions
            to complex problems.
          </p>
          <p>
            With a strong foundation in modern web technologies and a keen eye for design,
            I strive to build applications that not only function flawlessly but also provide
            an exceptional user experience.
          </p>
        </AboutText>

        <Parallax translateY={[-20, 20]}>
          <InfoGrid>
            {personalInfo.map((info, index) => (
              <InfoCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="icon">{info.icon}</div>
                <h4>{info.title}</h4>
                <p>{info.value}</p>
              </InfoCard>
            ))}
          </InfoGrid>
        </Parallax>
      </AboutContent>
    </AboutSection>
  );
};

export default About; 