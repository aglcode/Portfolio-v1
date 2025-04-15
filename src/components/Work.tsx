
import { motion } from 'framer-motion';
import { Timeline } from './ui/timeline';



function Work() {
  const timelineData = [
    {
      title: "Featured",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "/img/featured1.jpg",
            "/img/featured2.jpg",
            "/img/featured3.jpg",
            "/img/featured4.jpg"
          ].map((url, index) => (
            <motion.img
              key={index}
              src={url}
              alt={`Project ${index + 1}`}
              className=" object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
              initial={{ opacity: 0.95 }}
              whileHover={{ 
                scale: 1.05, 
                opacity: 1,
                transition: { 
                  duration: 0.4,
                  ease: "easeOut"
                }
              }}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Projects",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            Recent Projects and Contributions
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✓ E-commerce Platform
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✓ Portfolio Website
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✓ Dashboard Application
            </div>
          </div>
        </div>
      ),
    }
  ];

  return (
    <section id="work" className="section">
      <Timeline data={timelineData} 
            title="About Me"
            description="A brief timeline of my professional experience and achievements."
      />
    </section>
  );
}

export default Work;