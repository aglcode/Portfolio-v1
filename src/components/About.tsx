
import { Timeline } from './ui/timeline';

function About() {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-8">
            Senior Frontend Developer focusing on React and modern web technologies
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-8">
            Led development of multiple successful web applications and mentored junior developers
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            Key achievements:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✓ Implemented major feature releases
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✓ Improved application performance
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✓ Introduced modern development practices
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="section">
      <Timeline data={timelineData} 
          title="Timeline"
          description="A brief timeline of my professional experience and achievements."
      />
    </section>
  );
}

export default About;