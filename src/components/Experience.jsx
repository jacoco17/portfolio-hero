import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLaptopCode, FaCertificate, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ExperienceSection = styled.section`
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
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 4rem auto;

  @media (max-width: 768px) {
    margin: 2rem auto;
    padding-left: 1.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--primary);

    @media (max-width: 768px) {
      left: 0;
      transform: none;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: ${props => props.$align === 'right' ? 'flex-start' : 'flex-end'};
  padding-left: ${props => props.$align === 'right' ? '50%' : '0'};
  padding-right: ${props => props.$align === 'right' ? '0' : '50%'};
  margin-bottom: 3rem;
  position: relative;

  @media (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background: var(--primary);
    border-radius: 50%;
    z-index: 1;

    @media (max-width: 768px) {
      left: 0;
      transform: translate(-50%, -50%);
    }
  }
`;

const TimelineContent = styled.div`
  background: var(--surface);
  padding: 1.5rem;
  border-radius: 15px;
  width: 90%;
  border: 1px solid rgba(98, 252, 241, 0.1);
  margin: ${props => props.$align === 'right' ? '0 0 0 2rem' : '0 2rem 0 0'};
  text-align: ${props => props.$align === 'right' ? 'left' : 'right'};

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 1.2rem;
  }

  h3 {
    color: var(--primary);
    margin-bottom: 0.5rem;
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .company {
    color: var(--text);
    font-size: 1rem;
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  .date {
    color: var(--text);
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      color: var(--text);
      margin-bottom: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: ${props => props.$align === 'right' ? 'flex-start' : 'flex-end'};
      font-size: 0.9rem;

      @media (max-width: 768px) {
        font-size: 0.8rem;
      }

      &::before {
        content: '•';
        color: var(--primary);
        margin: ${props => props.$align === 'right' ? '0 0.5rem 0 0' : '0 0 0 0.5rem'};
        order: ${props => props.$align === 'right' ? 0 : 1};
      }
    }
  }
`;

const EducationSection = styled.div`
  margin-top: 6rem;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const EducationCard = styled(motion.div)`
  background: var(--surface);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(98, 252, 241, 0.1);
  text-align: center;

  svg {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }

  h3 {
    color: var(--heading);
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: var(--text);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .highlight {
    color: var(--primary);
    font-weight: 500;
  }
`;

const CertificatesSection = styled.div`
  margin-top: 4rem;
  position: relative;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    margin-top: 2rem;
  }

  .slick-track {
    display: flex !important;
    gap: 2rem;

    @media (max-width: 768px) {
      gap: 1rem;
    }
  }

  .slick-slide {
    margin: 0 1rem;

    @media (max-width: 768px) {
      margin: 0 0.5rem;
    }
  }

  .slick-list {
    margin: 0 -1rem;

    @media (max-width: 768px) {
      margin: 0 -0.5rem;
    }
  }

  .slick-dots {
    bottom: -30px;

    @media (max-width: 768px) {
      bottom: -25px;
    }

    li {
      margin: 0 4px;

      button {
        width: 8px;
        height: 8px;
        padding: 0;

        &::before {
          font-size: 8px;
          opacity: 0.5;
        }
      }

      &.slick-active button::before {
        opacity: 1;
      }
    }
  }
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: 0;' : 'right: 0;'}
  background: var(--surface);
  border: 1px solid var(--primary);
  color: var(--primary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary);
    color: var(--background);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const CertificateCard = styled(motion.div)`
  background: var(--surface);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(98, 252, 241, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  &:hover {
    transform: ${props => props.$type === 'certificate' ? 'translateY(-5px)' : 'none'};
    border-color: ${props => props.$type === 'certificate' ? 'var(--primary)' : 'rgba(98, 252, 241, 0.2)'};
  }

  h3 {
    color: var(--heading);
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      gap: 0.5rem;
    }

    svg {
      color: var(--primary);
      font-size: 1.5rem;

      @media (max-width: 768px) {
        font-size: 1.2rem;
      }
    }
  }

  .institution, .year {
    color: var(--text);
    margin-bottom: 0.5rem;
    font-size: 0.9rem;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }

  .institution {
    font-weight: 500;
    color: var(--primary);
  }

  .date {
    color: var(--primary);
    font-size: 0.9rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 0.8rem;
      margin-bottom: 0.75rem;
    }
  }

  .highlight {
    color: var(--text);
    font-size: 0.9rem;
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid rgba(98, 252, 241, 0.1);

    @media (max-width: 768px) {
      font-size: 0.8rem;
      padding-top: 0.75rem;
    }
  }

  a {
    background: transparent;
    border: 1px solid var(--primary);
    color: var(--primary);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: auto;
    text-decoration: none;
    text-align: center;
    font-size: 0.9rem;

    @media (max-width: 768px) {
      padding: 0.4rem 0.8rem;
      font-size: 0.8rem;
    }

    &:hover {
      background: var(--primary);
      color: var(--background);
    }
  }
`;

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "Aetherio IT Solutions",
      date: "Summer 2023",
      description: [
        "Developed responsive web applications using React",
        "Collaborated with team members on project planning",
        "Implemented modern UI/UX designs"
      ],
      align: "right"
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      date: "2022 - Present",
      description: [
        "Created custom websites for local businesses",
        "Implemented responsive designs",
        "Managed client requirements and feedback"
      ],
      align: "left"
    }
  ];

  const allCertificates = [
    {
      type: 'education',
      title: 'Bachelor of Science in Information Technology',
      institution: 'Western Mindanao State University',
      year: '2020 - Present',
      highlight: 'Expected Graduation: 2025',
      icon: <FaGraduationCap />
    },
    {
      type: 'education',
      title: 'Web Development Bootcamp',
      institution: 'Online Platform',
      year: '2025',
      highlight: 'Full Stack Development Certificate',
      icon: <FaCode />
    },
    {
      type: 'education',
      title: 'React.js Fundamentals',
      institution: 'WMSU SAM Sir. Rey',
      year: '2025',
      highlight: 'Advanced React Concepts',
      icon: <FaLaptopCode />
    },
    {
      type: 'certificate',
      title: 'Full-Stack Development 101',
      date: '16 Apr 2023',
      link: '#'
    },
    {
      type: 'certificate',
      title: 'What is Software Development?',
      date: '17 Apr 2023',
      link: '#'
    },
    {
      type: 'certificate',
      title: 'Getting Started with Full Stack Java Development',
      date: '17 Apr 2023',
      link: '#'
    },
    {
      type: 'certificate',
      title: 'Introduction to Web Scraping Python',
      date: '17 Apr 2023',
      link: '#'
    },
    {
      type: 'certificate',
      title: 'ChatGPT for Cybersecurity',
      date: '17 Apr 2023',
      link: '#'
    },
    {
      type: 'certificate',
      title: 'Python Django 101',
      date: '18 Apr 2023',
      link: '#'
    },
    {
      type: 'certificate',
      title: 'Introduction to Flutter Course Online',
      date: '18 Apr 2023',
      link: '#'
    },
    {
      type: 'certificate',
      title: 'Introduction to Android Studio Course',
      date: '18 Apr 2023',
      link: '#'
    },
    {
      type: 'certificate',
      title: 'ReactJS for Beginners',
      date: '19 Apr 2023',
      link: '#'
    },
    {
      type: 'certificate',
      title: 'Introduction to Front End Development',
      date: '20 Apr 2023',
      link: '#'
    },
    {
      type: 'certificate',
      title: 'Build a Custom GPT with OpenAI',
      date: '20 Apr 2023',
      link: '#'
    },
    {
      type: 'certificate',
      title: 'Project Management 101',
      date: '21 Apr 2023',
      link: '#'
    },
    {
      type: 'certificate',
      title: 'Introduction to Cloud Security',
      date: '21 Apr 2023',
      link: '#'
    },
    {
      type: 'certificate',
      title: 'Getting Started with Machine Learning Algorithms',
      date: '22 Apr 2023',
      link: '#'
    },
    {
      type: 'certificate',
      title: 'Introduction to PHP',
      date: '25 Apr 2023',
      link: '#'
    },
    {
      type: 'certificate',
      title: 'Introduction to Computer-Networking',
      date: '26 Apr 2023',
      link: '#'
    },
    {
      type: 'certificate',
      title: 'GitHub Copilot Fundamentals',
      date: '27 Apr 2023',
      link: '#'
    },
    {
      type: 'certificate',
      title: 'Website UI/UX Designing using ChatGPT',
      date: '28 Apr 2023',
      link: '#'
    }
  ];

  const CustomPrevArrow = (props) => (
    <CarouselButton direction="left" onClick={props.onClick}>
      <FaChevronLeft />
    </CarouselButton>
  );

  const CustomNextArrow = (props) => (
    <CarouselButton direction="right" onClick={props.onClick}>
      <FaChevronRight />
    </CarouselButton>
  );

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
  };

  return (
    <ExperienceSection id="experience">
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </SectionTitle>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My professional journey
      </motion.p>
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineItem
            key={index}
            $align={exp.align}
            initial={{ opacity: 0, x: exp.align === 'right' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <TimelineContent $align={exp.align}>
              <h3>{exp.title}</h3>
              <div className="company">{exp.company}</div>
              <div className="date">{exp.date}</div>
              <ul>
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <EducationSection>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education & Certifications
        </SectionTitle>

        <CertificatesSection>
          <Slider {...carouselSettings}>
            {allCertificates.map((item, index) => (
              <CertificateCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                $type={item.type}
              >
                <h3>
                  {item.type === 'education' ? item.icon : <FaCertificate />}
                  {item.title}
                </h3>
                {item.type === 'education' ? (
                  <>
                    <p className="institution">{item.institution}</p>
                    <p className="year">{item.year}</p>
                    {item.highlight && <p className="highlight">{item.highlight}</p>}
                  </>
                ) : (
                  <>
                    <p className="date">{item.date}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      View Certificate
                    </a>
                  </>
                )}
              </CertificateCard>
            ))}
          </Slider>
        </CertificatesSection>
      </EducationSection>
    </ExperienceSection>
  );
};

export default Experience; 