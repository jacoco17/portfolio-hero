import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const MusicButton = styled.button`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  background: var(--surface);
  border: 1px solid var(--primary);
  color: var(--primary);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: var(--primary);
    color: var(--background);
    transform: scale(1.1);
    box-shadow: 0 0 15px rgba(102, 252, 241, 0.3);
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    left: 1.5rem;
    width: 40px;
    height: 40px;
  }
`;

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [audio] = useState(new Audio('/juno.mp3'));

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.3; // Set volume to 30%

    return () => {
      audio.pause();
    };
  }, [audio]);

  const toggleMute = () => {
    if (isMuted) {
      audio.play();
    } else {
      audio.pause();
    }
    setIsMuted(!isMuted);
  };

  return (
    <MusicButton onClick={toggleMute}>
      {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
    </MusicButton>
  );
};

export default MusicPlayer; 