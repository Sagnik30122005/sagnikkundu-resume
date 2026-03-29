import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "RPA and AI Member",
    org: "USC KIIT",
    period: "October 2025 – Present",
    location: "Bhubaneswar",
    points: [
      "Developed and implemented RPA solutions to automate complex business processes, increasing operational efficiency.",
      "Collaborated with cross-functional teams to identify automation opportunities, delivering scalable solutions.",
      "Led the development of bots, optimizing performance and ensuring robust automation across departments.",
      "Managed the full lifecycle of RPA and AI projects, from requirements gathering to deployment.",
    ],
  },
];

const volunteering = [
  {
    title: "Student Volunteer at NSS KIIT",
    period: "August 2025",
    location: "Bhubaneswar",
    points: [
      "Organized community outreach programs, impacting over 500 individuals through health camps and educational initiatives.",
      "Coordinated volunteer teams, ensuring efficient resource allocation and successful event delivery.",
      "Facilitated workshops and awareness campaigns on critical social issues.",
    ],
  },
  {
    title: "Organizing Committee Member at SDIS KIIT",
    period: "February 2026 – March 2026",
    location: "Bhubaneswar",
    points: [
      "Planned and executed targeted offline marketing campaigns, enhancing brand visibility.",
      "Cultivated media relationships, securing favorable PR coverage across various platforms.",
      "Analyzed campaign performance metrics to optimize strategies, increasing event attendance.",
    ],
  },
];

const TimelineItem = ({ item, index }: { item: typeof experiences[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative pl-8 pb-10 last:pb-0"
  >
    <div className="absolute left-0 top-1.5 glow-dot" />
    <div className="absolute left-[3px] top-4 bottom-0 w-px bg-border last:hidden" />

    <h3 className="font-display font-semibold text-lg text-foreground">{item.title}</h3>
    <p className="text-primary text-sm font-medium mb-1">{item.org || ""}</p>
    <div className="flex items-center gap-3 text-muted-foreground text-xs mb-3">
      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.period}</span>
      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {item.location}</span>
    </div>
    <ul className="space-y-1.5">
      {item.points.map((p, i) => (
        <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
          <span className="text-primary mt-1.5 shrink-0">▸</span> {p}
        </li>
      ))}
    </ul>
  </motion.div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mb-12"
        >
          <span className="text-gradient">Experience</span> & Involvement
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-sm tracking-[0.2em] uppercase text-primary mb-6 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Work Experience
            </h3>
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.title} item={exp} index={i} />
            ))}
          </div>

          <div>
            <h3 className="font-display text-sm tracking-[0.2em] uppercase text-primary mb-6 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Volunteering & Organizations
            </h3>
            {volunteering.map((vol, i) => (
              <TimelineItem key={vol.title} item={{ ...vol, org: "" }} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
