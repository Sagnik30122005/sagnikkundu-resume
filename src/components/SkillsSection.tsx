import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Languages & Frameworks",
    skills: ["HTML", "CSS", "JavaScript", "Core Java", "C", "PLSQL", "SQL"],
  },
  {
    label: "Technical Skills",
    skills: ["Data Structures & Algorithms", "RPA (UiPath)", "Database Management", "Operating Systems", "Prompt Engineering"],
  },
  {
    label: "Soft Skills",
    skills: ["Communication", "Teamwork", "Problem-Solving", "Leadership", "Strategic Thinking"],
  },
  {
    label: "Hobbies",
    skills: ["Chess", "Reading", "Cricket", "Football", "Badminton"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mb-12"
        >
          <span className="text-gradient">Skills</span> & Interests
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="font-display font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
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

export default SkillsSection;
