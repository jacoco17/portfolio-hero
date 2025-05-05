import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogSection = styled.section`
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
    background: linear-gradient(
      135deg, 
      rgba(102, 252, 241, 0.03) 0%,
      transparent 50%,
      rgba(102, 252, 241, 0.02) 100%
    );
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

const SectionTitle = styled.div`
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
      rgba(102, 252, 241, 0.3) 100%
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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled(motion.div)`
  background: rgba(20, 20, 20, 0.7);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(102, 252, 241, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(102, 252, 241, 0.2);
    border-color: rgba(102, 252, 241, 0.3);
    
    .card-image img {
      transform: scale(1.05);
    }
  }
`;

const CardImage = styled.div`
  height: 220px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .day-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(0, 0, 0, 0.7);
    color: var(--primary);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(102, 252, 241, 0.3);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  
  h3 {
    font-size: 1.5rem;
    color: var(--heading);
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    color: var(--text);
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }
`;

const ReadMoreLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  margin-top: auto;
  padding: 0.5rem 0;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
  
  &:hover {
    border-bottom-color: var(--primary);
    letter-spacing: 0.5px;
    
    svg {
      transform: translateX(5px);
    }
  }
  
  svg {
    transition: transform 0.3s ease;
  }
`;

// BlogPost component for the item in the main grid
const BlogCardItem = ({ day, title, description, coverImage }) => {
  return (
    <BlogCard
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <CardImage className="card-image">
        <img src={coverImage} alt={title} />
        <div className="day-badge">
          <FaCalendarAlt /> Day {day}
        </div>
      </CardImage>
      <CardContent>
        <h3>{title}</h3>
        <p>{description}</p>
        <ReadMoreLink to={`/blog/${day}`}>
          Read More <FaArrowRight />
        </ReadMoreLink>
      </CardContent>
    </BlogCard>
  );
};

const Blog = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Blog posts organized by days
  const blogData = [
    {
      day: 1,
      title: "First Day Adventures",
      description: "Our journey began with exploration of historical vehicles and presidential artifacts, providing us with insights into the country's rich political history.",
      coverImage: '/8.jpg',
      images: [
        {
          id: 1,
          image: '/8.jpg',
          title: 'President Vintage Cars Show Room',
          description: '🚗 Day 1 – President\'s Vintage Cars Showroom\n\nA hidden gem from our city tour! The showroom displayed elegant vintage vehicles once used by Philippine presidents. Each car told its own story about the country\'s political past and style through the decades.'
        },
        {
          id: 2,
          image: '/9.jpg',
          title: 'Vintage Car of Douglas Mc Arthur Details',
          description: '🛻 Day 1 – Vintage Car of General Douglas MacArthur\n\nThe highlight of the showroom was General Douglas MacArthur\'s vintage ride—an armored, bulletproof car with wartime history etched in every curve.'
        },
        {
          id: 3,
          image: '/1.jpg',
          title: 'City Tour Highlights',
          description: '🏙️ Day 1 – City Tour Highlights\n\nOur first day concluded with a comprehensive city tour, introducing us to the vibrant urban landscape. We visited key landmarks, experienced local culture, and began to understand the unique character of the city.'
        }
      ]
    },
    {
      day: 2,
      title: "Art & Industry in Subic Bay",
      description: "On our second day, we explored Subic Bay's transformation from a military base to an economic zone, with a special focus on its emerging art scene.",
      coverImage: '/2.jpg',
      images: [
        {
          id: 4,
          image: '/2.jpg',
          title: 'Subic Bay Art History',
          description: '🎨 Day 2 – Subic Bay Art History\n\nAfter visiting the SBMA departments, we took a break and dived into Subic Bay\'s lesser-known art scene. The art pieces we saw reflected a unique blend of indigenous heritage and modern flair.'
        },
        {
          id: 5,
          image: '/8.jpg',
          title: 'SBMA Department Tour',
          description: '🏢 Day 2 – SBMA Department Tour\n\nWe were given exclusive access to the inner workings of the Subic Bay Metropolitan Authority. The tour highlighted how the former naval base has been transformed into a thriving economic zone.'
        },
        {
          id: 6,
          image: '/9.jpg',
          title: 'Subic Bay Heritage Center',
          description: '🏛️ Day 2 – Subic Bay Heritage Center\n\nOur exploration continued at the Heritage Center, where we discovered the rich history of Subic Bay from pre-colonial times through the American naval era to the present day.'
        }
      ]
    },
    {
      day: 3,
      title: "Cultural Immersion at National Museum",
      description: "The third day was dedicated to exploring the Philippines' cultural heritage through its national treasures and artistic masterpieces.",
      coverImage: '/1.jpg',
      images: [
        {
          id: 7,
          image: '/1.jpg',
          title: 'Philippines National Museum',
          description: '📍 Day 3 – Philippines National Museum\n\nWe explored the Philippines National Museum and were amazed by the country\'s rich cultural heritage and art. From ancient artifacts to Filipino masterpieces, every room was a time capsule of national identity.'
        },
        {
          id: 8,
          image: '/5.jpg',
          title: 'Philippines National Museum Solo Pic',
          description: '🖼️ Day 3 – Philippines National Museum Solo Pic\n\nCaught a solo shot inside the National Museum! Posing next to centuries-old art and marble columns made for an epic and timeless memory.'
        },
        {
          id: 9,
          image: '/2.jpg',
          title: 'National Art Gallery',
          description: '🎭 Day 3 – National Art Gallery\n\nThe National Art Gallery section featured an impressive collection of paintings by Filipino masters. We were particularly moved by the works of Juan Luna and Fernando Amorsolo.'
        }
      ]
    },
    {
      day: 4,
      title: "Industrial Innovation at Hytech",
      description: "Day four gave us unprecedented access to industrial automation technologies at Hytec Power Inc., where we witnessed cutting-edge engineering in action.",
      coverImage: '/4.jpg',
      images: [
        {
          id: 10,
          image: '/4.jpg',
          title: 'Hytech Company Tour',
          description: '🏭 Day 4 – Hytec Power Inc. Tour\n\nHytec Power Inc. gave us an incredible glimpse into the world of industrial automation and engineering. We saw state-of-the-art robotics, learned about CNC machines, and met engineers who explained how technology powers industries today.'
        },
        {
          id: 11,
          image: '/10.jpg',
          title: 'Engineering Workshop',
          description: '🔧 Day 4 – Engineering Workshop\n\nFollowing the tour, we participated in a hands-on engineering workshop where we got to apply some of the principles we had learned. Working in teams, we tackled real-world engineering challenges.'
        },
        {
          id: 12,
          image: '/8.jpg',
          title: 'Technology Demonstration',
          description: '💡 Day 4 – Technology Demonstration\n\nThe day concluded with a special demonstration of emerging technologies being developed at Hytec. We witnessed prototypes of next-generation power systems and got a preview of innovations that could transform industrial efficiency.'
        }
      ]
    },
    {
      day: 5,
      title: "Urban Transportation Systems",
      description: "Our fifth day was focused on understanding Manila's public transport infrastructure through a comprehensive tour of the LRT system.",
      coverImage: '/3.jpg',
      images: [
        {
          id: 13,
          image: '/3.jpg',
          title: 'LRT Tour',
          description: '🚊 Day 5 – LRT Tour\n\nRiding the LRT wasn\'t just about commuting—it was a learning experience. We got an inside look at how the system operates, from train control to safety protocols.'
        },
        {
          id: 14,
          image: '/9.jpg',
          title: 'Transport Hub Integration',
          description: '🚉 Day 5 – Transport Hub Integration\n\nOur exploration continued at a major transport interchange where we studied how different modes of public transportation connect. The design of the hub demonstrated effective urban planning principles.'
        },
        {
          id: 15,
          image: '/5.jpg',
          title: 'Urban Mobility Lecture',
          description: '🏙️ Day 5 – Urban Mobility Lecture\n\nThe day concluded with an insightful lecture by a transportation engineer who discussed the challenges and opportunities in Manila\'s urban mobility landscape.'
        }
      ]
    },
    {
      day: 6,
      title: "Cultural Heritage in Baguio",
      description: "Our final day took us to the mountain city of Baguio, where we experienced its unique blend of cultural traditions and recreational activities.",
      coverImage: '/6.jpg',
      images: [
        {
          id: 16,
          image: '/6.jpg',
          title: 'Bell Church Buddha Pic Baguio',
          description: '🛕 Day 6 – Bell Church in Baguio\n\nBell Church in Baguio was serene and beautiful. The Buddha statue stood tall and peaceful, surrounded by lush gardens and incense smoke.'
        },
        {
          id: 17,
          image: '/7.jpg',
          title: 'Bell Church Entry Gate',
          description: '🏮 Day 6 – Bell Church Entry Gate\n\nThe ornate entrance to Bell Church was picture-perfect with its intricate carvings and iconic Chinese architecture.'
        },
        {
          id: 18,
          image: '/10.jpg',
          title: 'Baguio Go Carts Last Day',
          description: '🏎️ Day 6 – Baguio Go-Karts\n\nWe ended the trip with a thrilling go-kart race in Baguio! The track\'s elevation and cool mountain air added an extra dimension to the racing experience.'
        }
      ]
    }
  ];

  return (
    <BlogSection id="blog">
      <SectionTitle>
        <div className="subtitle">BLOG</div>
        <h2>OJT & INDUSTRY VISITS JOURNAL</h2>
      </SectionTitle>

      <BlogGrid>
        {blogData.map((post) => (
          <BlogCardItem
            key={post.day}
            day={post.day}
            title={post.title}
            description={post.description}
            coverImage={post.coverImage}
          />
        ))}
      </BlogGrid>

      {/* This would typically be rendered by React Router on a different route */}
      {/* For this example, I'm keeping the implementation simple */}
    </BlogSection>
  );
};

export default Blog; 