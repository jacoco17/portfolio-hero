import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const GallerySection = styled.section`
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

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  height: 300px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(102, 252, 241, 0.1);
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(102, 252, 241, 0.2);
    border-color: rgba(102, 252, 241, 0.3);
    
    img {
      transform: scale(1.05);
    }
    
    .overlay {
      opacity: 1;
    }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1.5rem;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    color: var(--heading);
    opacity: 0.7;
    transition: opacity 0.3s ease;
    
    h3 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    
    p {
      font-size: 0.9rem;
      color: var(--text);
    }
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  background: var(--surface);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 0 50px rgba(102, 252, 241, 0.2);
  display: flex;
  gap: 2rem;
  align-items: center;
  border: 1px solid rgba(102, 252, 241, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
    border-radius: 15px;
    box-shadow: 0 0 30px rgba(102, 252, 241, 0.15);
  }
`;

const ImageCaption = styled.div`
  flex: 1;
  color: var(--heading);
  font-size: 1.1rem;
  line-height: 1.6;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(102, 252, 241, 0.1);
  text-shadow: 0 0 10px rgba(102, 252, 241, 0.3);
  opacity: 0.95;
  height: 70vh;
  overflow-y: auto;
  white-space: pre-line;

  .title-section {
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(102, 252, 241, 0.2);
  }

  .location {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: linear-gradient(90deg, var(--primary) 0%, var(--heading) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text);
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    height: auto;
    max-height: 40vh;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -3rem;
  right: -3rem;
  background: rgba(102, 252, 241, 0.1);
  border: 1px solid var(--primary);
  color: var(--primary);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  padding: 0.8rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    color: var(--background);
    background: var(--primary);
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(102, 252, 241, 0.3);
  }
  
  @media (max-width: 768px) {
    top: -2rem;
    right: -1rem;
    padding: 0.6rem;
    font-size: 1.2rem;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(102, 252, 241, 0.1);
  border: 1px solid var(--primary);
  color: var(--primary);
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 1001;
  padding: 1rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    color: var(--background);
    background: var(--primary);
    box-shadow: 0 0 15px rgba(102, 252, 241, 0.3);
  }
  
  &.prev {
    left: 1rem;
  }
  
  &.next {
    right: 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 1rem;
  }
`;

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      image: '/1.jpg',
      title: 'National Museum',
      description: 'Exploring the rich cultural heritage of the Philippines at the National Museum.'
    },
    {
      id: 2,
      image: '/2.jpg',
      title: 'Subic Bay Art',
      description: 'Admiring the unique art pieces that reflect the indigenous heritage and modern flair of Subic Bay.'
    },
    {
      id: 3,
      image: '/3.jpg',
      title: 'City Exploration',
      description: 'Wandering through the vibrant streets and discovering hidden gems in the urban landscape.'
    },
    {
      id: 4,
      image: '/4.jpg',
      title: 'Natural Wonders',
      description: 'Connecting with nature and experiencing the breathtaking landscapes of the region.'
    },
    {
      id: 5,
      image: '/5.jpg',
      title: 'Historical Site',
      description: 'Standing among ancient artifacts and learning about the fascinating history of the Philippines.'
    },
    {
      id: 6,
      image: '/6.jpg',
      title: 'Modern Architecture',
      description: 'Appreciating the blend of traditional and contemporary design in urban structures.'
    }
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % galleryImages.length 
      : (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    
    setSelectedImage(galleryImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <GallerySection id="gallery">
      <SectionTitle>
        <div className="subtitle">GALLERY</div>
        <h2>CAPTURED MOMENTS</h2>
      </SectionTitle>

      <GalleryGrid>
        {galleryImages.map((item, index) => (
          <GalleryItem 
            key={item.id}
            onClick={() => openModal(item, index)}
          >
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </GalleryItem>
        ))}
      </GalleryGrid>

      <AnimatePresence>
        {selectedImage && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalContent>
              <CloseButton onClick={closeModal}>
                <FaTimes />
              </CloseButton>
              
              <NavigationButton 
                className="prev" 
                onClick={() => navigateImage('prev')}
              >
                <FaChevronLeft />
              </NavigationButton>
              
              <NavigationButton 
                className="next" 
                onClick={() => navigateImage('next')}
              >
                <FaChevronRight />
              </NavigationButton>
              
              <ImageContainer>
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                />
              </ImageContainer>
              
              <ImageCaption>
                <div className="title-section">
                  <div className="location">{selectedImage.title}</div>
                </div>
                <div className="description">
                  {selectedImage.description}
                </div>
              </ImageCaption>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </GallerySection>
  );
};

export default Gallery; 