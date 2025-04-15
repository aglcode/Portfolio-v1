import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

// Keyframes component
function Keyframes() {
  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
  };

  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
      style={box}
    />
  );
}

// Home component
function Home() {
  return (
    <>
    <section id="home" className="section">
      <div className="container" style={containerStyle}>
        <div style={textContentStyle}>
          <h1>Angelo Almonte</h1>
          <h2>Frontend Developer</h2>
          <p>Creating minimal and functional digital experiences</p>
        </div>
        <div style={animationStyle}>
          <Keyframes />
        </div>
      </div>
    </section>


    {/* <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10" style={{ marginTop: '40px' }}>
    <h2 className="text-lg md:text-4xl mb-4 text-foreground max-w-4xl">
      My Journey
    </h2>
    <p className="text-muted-foreground text-sm md:text-base max-w-sm">
      Here's a timeline of my professional journey and key milestones.
    </p>
    </div> */}

</>
  );
}

// Inline styles for layout
const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
};

const textContentStyle = {
  flex: '1',
};

const animationStyle = {
  flex: '0 0 auto',
  marginLeft: '100px',
};

export default Home;