import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
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
    background: linear-gradient(45deg, rgba(102, 252, 241, 0.05) 0%, transparent 100%);
    pointer-events: none;
  }
`;

const SectionTitle = styled.div`
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--primary);
  }
  
  h2 {
    font-size: 2.5rem;
    color: var(--heading);
    margin-bottom: 0.5rem;
    text-align: left;
  }

  .subtitle {
    color: var(--primary);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
  }
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  padding: 1.5rem;
  background: var(--surface);
  border-radius: 12px;
  border: 1px solid rgba(98, 252, 241, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 5px 15px rgba(98, 252, 241, 0.1);
  }

  .icon {
    width: 48px;
    height: 48px;
    background: rgba(98, 252, 241, 0.1);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    font-size: 1.4rem;
    flex-shrink: 0;
    transition: all 0.3s ease;
  }

  &:hover .icon {
    background: var(--primary);
    color: var(--background);
  }

  .content {
    h3 {
      color: var(--heading);
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: var(--text);
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 2rem;
  background: var(--surface);
  border-radius: 12px;
  border: 1px solid rgba(98, 252, 241, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary);
    box-shadow: 0 5px 15px rgba(98, 252, 241, 0.1);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  background: rgba(98, 252, 241, 0.05);
  border: 1px solid rgba(98, 252, 241, 0.1);
  border-radius: 8px;
  color: var(--text);
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(98, 252, 241, 0.1);
  }

  &::placeholder {
    color: var(--text);
    opacity: 0.7;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem 1.2rem;
  background: rgba(98, 252, 241, 0.05);
  border: 1px solid rgba(98, 252, 241, 0.1);
  border-radius: 8px;
  color: var(--text);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary);
    background: rgba(98, 252, 241, 0.1);
  }

  &::placeholder {
    color: var(--text);
    opacity: 0.7;
  }
`;

const Button = styled.button`
  padding: 1rem 2.5rem;
  background: var(--primary);
  color: var(--background);
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
  letter-spacing: 0.5px;

  &:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(98, 252, 241, 0.2);
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(98, 252, 241, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary);
    box-shadow: 0 5px 15px rgba(98, 252, 241, 0.1);
  }

  iframe {
    width: 100%;
    height: 100%;
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <ContactSection id="contact">
      <SectionTitle>
        <div className="subtitle">Get in Touch</div>
        <h2>CONTACT ME OR GET DIRECTIONS TO MY OFFICE!</h2>
      </SectionTitle>

      <ContactInfo>
        <InfoItem>
          <div className="icon">
            <FaMapMarkerAlt />
          </div>
          <div className="content">
            <h3>Address</h3>
            <p>Carmen Drive B., Zamboanga, Zamboanga del Sur</p>
          </div>
        </InfoItem>

        <InfoItem>
          <div className="icon">
            <FaPhone />
          </div>
          <div className="content">
            <h3>Contact Me</h3>
            <p>+63 9069658630</p>
          </div>
        </InfoItem>

        <InfoItem>
          <div className="icon">
            <FaEnvelope />
          </div>
          <div className="content">
            <h3>Email Me</h3>
            <p>johnrivero217@gmail.com</p>
          </div>
        </InfoItem>
      </ContactInfo>

      <ContactGrid>
        <ContactForm onSubmit={handleSubmit}>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <Input type="text" placeholder="Subject" required />
          <TextArea placeholder="Message" required />
          <Button type="submit">Send Message</Button>
        </ContactForm>

        <MapContainer>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d832.6319322640874!2d122.04413468478805!3d6.927923998258112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325041b6772f1621%3A0xf0e2b659126ccc80!2sCarmen%20Drive%20B.%2C%20Zamboanga%2C%20Zamboanga%20del%20Sur!5e0!3m2!1sen!2sph!4v1745983151584!5m2!1sen!2sph"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          />
        </MapContainer>
      </ContactGrid>
    </ContactSection>
  );
};

export default Contact; 