import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhp, FaJs, FaReact, FaPython, FaDatabase, FaHtml5, FaCss3, FaGit, FaNodeJs } from 'react-icons/fa';

const TechSection = styled.section`
  min-height: 100vh;
  padding: 100px 10%;
  background: #0f0f0f;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TechItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
  }

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const TechStack = () => {
  const techItems = [
    { icon: <FaPhp />, name: 'PHP' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaDatabase />, name: 'MySQL' },
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3 />, name: 'CSS' },
    { icon: <FaGit />, name: 'Git' },
    { icon: <FaNodeJs />, name: 'Node.js' },
  ];

  return (
    <TechSection id="tech">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tech Stack
      </motion.h2>
      <Grid>
        {techItems.map((tech, index) => (
          <TechItem
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {tech.icon}
            <span>{tech.name}</span>
          </TechItem>
        ))}
      </Grid>
    </TechSection>
  );
};

export default TechStack; 