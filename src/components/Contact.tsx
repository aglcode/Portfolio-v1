
import { Timeline } from './ui/timeline';

function Contact() {
  const timelineData = [
    {
      title: "Contact",
      content: (
        <div className=' w-full'>
          <p className="text-foreground text-xs md:text-sm font-normal mb-4">
            Let's work together
          </p>
          <div className="mb-8 space-y-2">
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✓ Email: hello@example.com
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✓ LinkedIn: /in/johndoe
            </div>
            <div className="flex gap-2 items-center text-muted-foreground text-xs md:text-sm">
              ✓ GitHub: @johndoe
            </div>
          </div>
        </div>
      ),
    }
  ];

  return (
    <section id="contact" className="section">
      <Timeline data={timelineData} 
          title="Get in Touch"
          description="A brief timeline of my professional experience and achievements."
      />
    </section>
  );
}

export default Contact;