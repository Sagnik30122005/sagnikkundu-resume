import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Mail, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            I'm always open to new opportunities, collaborations, and interesting conversations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/Sagnik30122005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              <Github className="w-4 h-4" /> GitHub <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://www.linkedin.com/in/sagnik-kundu-1b5588302"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-display font-medium text-sm hover:bg-secondary transition-colors"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href="https://goresume.io/sagnik-1774545586178956/shrs_f4eb3714e2eb4435a67879bda115ba60"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-display font-medium text-sm hover:bg-secondary transition-colors"
            >
              <FileText className="w-4 h-4" /> Resume <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </motion.div>

        <div className="mt-20 pt-8 border-t border-border text-muted-foreground text-xs">
          <p>© 2026 Sagnik. Built with passion.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
