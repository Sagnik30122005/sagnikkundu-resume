import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Smart Non-Proxy Attendance System",
    description: "AI-assisted attendance frontend leveraging smart development tools for prototyping and component architecture. Designed to mitigate proxy attendance issues.",
    tech: ["Frontend", "AI-Assisted", "UX Design"],
    github: "https://github.com/Sagnik30122005/campus-connect",
    period: "Feb 2026 – Apr 2026",
  },
  {
    title: "News Reader Bot",
    description: "RPA-based News Reader bot built with UiPath Studio, providing real-time news updates with article parsing, categorization, and personalized recommendations.",
    tech: ["RPA", "UiPath", "Automation"],
    github: "https://github.com/Sagnik30122005/News_reader",
    period: "Sep – Oct 2025",
  },
  {
    title: "E-Commerce Order Dispatch Automation",
    description: "Automated e-commerce order dispatch process, reducing manual effort by 40% and accelerating fulfillment by 25%. Handled 10,000+ daily orders.",
    tech: ["RPA", "E-Commerce", "Process Automation"],
    github: "https://github.com/Sagnik30122005/E-commerce_Order_Dispatch_Automation",
    period: "",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mb-12"
        >
          <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col group hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-semibold text-foreground leading-snug pr-2">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              {project.period && (
                <p className="text-xs text-muted-foreground mb-2">{project.period}</p>
              )}

              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-primary/20 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
