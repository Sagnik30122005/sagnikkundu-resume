import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    school: "Kalinga Institute of Industrial Technology",
    grade: "CGPA: 8.7",
    period: "June 2024 – Present",
    location: "Bhubaneswar",
    highlights: [
      "Core CS: Data Structures, Operating Systems, DBMS",
      "Proficiency in C and Core Java",
      "Frontend development with HTML & CSS",
      "Prompt Engineering for Software Construction",
    ],
  },
  {
    degree: "12th Boards",
    school: "Lakshaya International School",
    grade: "76%",
    period: "April 2022 – May 2024",
    location: "Ahmedabad",
    highlights: [],
  },
  {
    degree: "10th Boards",
    school: "Cosmos Castle International School",
    grade: "",
    period: "",
    location: "Ahmedabad",
    highlights: [],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold mb-12"
        >
          <span className="text-gradient">Education</span>
        </motion.h2>

        <div className="grid gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col md:flex-row md:items-start gap-4"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-foreground text-lg">{edu.degree}</h3>
                <p className="text-muted-foreground text-sm">{edu.school}</p>
                <div className="flex flex-wrap gap-3 mt-1 text-xs text-muted-foreground">
                  {edu.grade && <span className="text-primary font-medium">{edu.grade}</span>}
                  {edu.period && <span>{edu.period}</span>}
                  {edu.location && <span>📍 {edu.location}</span>}
                </div>
                {edu.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {edu.highlights.map((h) => (
                      <span key={h} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
