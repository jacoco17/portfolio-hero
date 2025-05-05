import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 100px 10%;
  background: var(--background);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 5%;
  }

  @media (max-width: 480px) {
    padding: 40px 4%;
    min-height: auto;
  }

  @media (max-width: 375px) {
    padding: 30px 3%;
  }

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
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--heading);
  margin-bottom: 2rem;
  position: relative;
  display: block;
  width: 100%;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
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
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 375px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;

    &::after {
      bottom: -10px;
      width: 60px;
    }
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 375px) {
    gap: 1rem;
    margin-top: 1rem;
  }
`;

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 375px) {
    gap: 0.4rem;
    margin-bottom: 1rem;
  }
`;

const FilterTab = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${props => props['data-active'] === 'true' ? 'var(--primary)' : 'var(--surface)'};
  color: ${props => props['data-active'] === 'true' ? 'var(--background)' : 'var(--text)'};
  border: 1px solid ${props => props['data-active'] === 'true' ? 'var(--primary)' : 'rgba(98, 252, 241, 0.1)'};
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    padding: 0.7rem 1.25rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }

  @media (max-width: 375px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
    border-radius: 6px;
  }

  &:hover {
    border-color: var(--primary);
    transform: translateY(-2px);
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--surface);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(98, 252, 241, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 480px) {
    border-radius: 12px;
  }

  @media (max-width: 375px) {
    border-radius: 10px;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
  }
`;

const ProjectIcon = styled.div`
  background: rgba(98, 252, 241, 0.1);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1.75rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }

  @media (max-width: 375px) {
    padding: 1.25rem;
  }

  svg {
    font-size: 2.5rem;
    color: var(--primary);

    @media (max-width: 768px) {
      font-size: 2.25rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }

    @media (max-width: 375px) {
      font-size: 1.75rem;
    }
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }

  @media (max-width: 375px) {
    padding: 0.875rem;
  }
`;

const ProjectTitle = styled.h3`
  color: var(--heading);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 375px) {
    font-size: 0.95rem;
    margin-bottom: 0.4rem;
  }
`;

const ProjectDescription = styled.p`
  color: var(--text);
  font-size: 0.9rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 0.875rem;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
    margin-bottom: 0.75rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.4rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    gap: 0.3rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 375px) {
    gap: 0.25rem;
    margin-bottom: 0.875rem;
  }
`;

const TechTag = styled.span`
  background: rgba(98, 252, 241, 0.1);
  color: var(--primary);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    padding: 0.25rem 0.7rem;
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
  }

  @media (max-width: 375px) {
    padding: 0.15rem 0.5rem;
    font-size: 0.65rem;
    border-radius: 3px;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.875rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
  }

  @media (max-width: 375px) {
    gap: 0.5rem;
    flex-wrap: wrap;
  }
`;

const ProjectLink = styled.a`
  padding: 0.5rem 1rem;
  border: 1px solid var(--primary);
  border-radius: 4px;
  color: var(--text);
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-align: center;
  min-width: 100px;

  @media (max-width: 768px) {
    padding: 0.45rem 0.9rem;
    font-size: 0.85rem;
    min-width: 90px;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    min-width: 85px;
  }

  @media (max-width: 375px) {
    padding: 0.35rem 0.7rem;
    font-size: 0.75rem;
    min-width: 80px;
    flex: 1;
  }

  &:hover {
    background: var(--primary);
    color: var(--background);
  }
`;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      icon: <FaCode />,
      title: 'Portfolio Website',
      description: 'Modern portfolio website built with React and Vite',
      tech: ['React', 'Vite', 'Styled Components'],
      category: 'Web Apps',
    },
    {
      icon: <FaLaptopCode />,
      title: 'E-commerce Smoktronix',
      description: 'Full-stack e-commerce platform with javascript and mysql',
      tech: ['React', 'Node.js', 'MongoDB'],
      category: 'Web Apps',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Task Management App',
      description: 'Mobile-first task management application',
      tech: ['React Native', 'Firebase'],
      category: 'Mobile Apps',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Pokemon Go',
      description: 'A Web game application inspired by the popular Pokemon Go game',
      tech: ['React JS', 'Chakra UI', 'Poke API'],
      category: 'Web Apps',
    },
    {
      icon: <FaLaptopCode />,
      title: 'WMSU ILS: SHS Student Info and Grade Management System',
      description: 'Information and grade management system for Western Mindanao State University Senior High School students',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      category: 'Web Apps',
    },
    {
      icon: <FaLaptopCode />,
      title: 'WMSU ALUMNI: Information Management System',
      description: 'Comprehensive information management system for Western Mindanao State University alumni',
      tech: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      category: 'Web Apps',
    },
    {
      icon: <FaCode />,
      title: 'To-Do List App',
      description: 'A modern and responsive to-do list application with task management features',
      tech: ['React', 'Local Storage', 'Styled Components'],
      category: 'Web Apps',
    }
  ];

  const filters = ['All', 'Web Apps', 'Mobile Apps'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsSection id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </SectionTitle>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A selection of my recent work
      </motion.p>
      <FilterTabs>
        {filters.map((filter) => (
          <FilterTab
            key={filter}
            data-active={(activeFilter === filter).toString()}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </FilterTab>
        ))}
      </FilterTabs>
      <ProjectsGrid>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProjectIcon>
              {project.icon}
            </ProjectIcon>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </TechStack>
              <ProjectLinks>
                <ProjectLink href={
                  project.title === 'Pokemon Go' ? 'https://pokedex-rivero.netlify.app/' : 
                  project.title === 'WMSU ALUMNI: Information Management System' ? 'https://wmsu-alumni.ct.ws/?i=1' : 
                  '#'
                } target="_blank">View Demo</ProjectLink>
                <ProjectLink href="#" target="_blank">View Code</ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 