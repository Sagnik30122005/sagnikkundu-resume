import { motion } from "framer-motion";
import { Code2, Bot, Users } from "lucide-react";

const highlights = [
  { icon: Bot, label: "RPA & AI", desc: "Building automation solutions" },
  { icon: Code2, label: "Web Dev", desc: "HTML, CSS, JavaScript" },
  { icon: Users, label: "Teamwork", desc: "Cross-functional collaboration" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">About</span> Me
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mb-12">
            Highly motivated Computer Science Engineering undergraduate with expertise in RPA and Web development. 
            Developed and implemented automation solutions, reducing manual effort. Proficient in Data Structures, 
            SQL, HTML, CSS, JavaScript, Core Java, C, PLSQL, Operating System, and Database Management System. 
            Experienced in teamwork and problem-solving, eager to contribute to innovative software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 group hover:border-primary/30 transition-colors"
            >
              <item.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold text-foreground mb-1">{item.label}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
