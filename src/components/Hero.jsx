import "./Hero.css";
import HeroImage from "../assets/hero-image.png";
import { motion } from "framer-motion"; // Import Framer Motion

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hi, I'm <br />John Francis A. Rivero{"\u00A0"}</h1>
        <h2>Full-Stack Developer</h2>
        <p>"Pagusapan natin yan."</p>
        <div className="buttons">
          <button className="btn-primary">Download CV</button>
          <button className="btn-secondary">Let's Talk</button>
        </div>
      </div>
      <div className="hero-img-container">
        {/* Added motion.img for the bounce effect */}
        <motion.img
          src={HeroImage}
          alt="Profile"
          className="hero-img"
          whileTap={{ scale: 1.2 }} // Image will scale up when clicked
          transition={{ type: "spring", stiffness: 500, damping: 10 }} // Smooth bounce effect
        />
      </div>
    </section>
  );
};

export default Hero;
