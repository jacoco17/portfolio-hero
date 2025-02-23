import profileImage from "../assets/about.jpg"; // Adjust the path based on your folder structure

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "100px auto",
        padding: "50px",
        color: "white",
        background: "#0a192f",
        maxWidth: "900px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.64)",
        gap: "30px",
      }}
    >
      {/* Left Side - About Text */}
      <div style={{ flex: 1, textAlign: "left" }}>
        <h1
          style={{
            fontSize: "2rem",
            borderBottom: "2px solid white",
            display: "inline-block",
            paddingBottom: "5px",
          }}
        >
          About Me
        </h1>
        <p style={{ fontSize: "1.2rem", marginTop: "20px", lineHeight: "1.6" }}>
          I'm John Francis A. Rivero, a 22-year-old IT student from Zamboanga
          City. I'm passionate about technology, particularly in web development
          and IT maintenance. I specialize in coding cool and functional
          websites while also handling hardware and software maintenance, such
          as installing operating systems, upgrading PC parts, and
          troubleshooting technical issues. As a student at Western Mindanao
          State University, I constantly seek to expand my knowledge and
          improve my skills in the ever-evolving world of technology.
        </p>
      </div>

      {/* Right Side - Image */}
      <div style={{ flex: 1, textAlign: "center" }}>
        <img
          src={profileImage}
          alt="John Francis A. Rivero"
          style={{
            width: "100%",
            maxWidth: "300px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
          }}
        />
      </div>
    </div>
  );
};

export default About;
