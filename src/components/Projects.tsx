import { motion } from 'motion/react';
import { projects } from '../data';
import { ExternalLink, Code } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-10">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Projects</h3>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <a 
              key={idx} 
              href={project.url} 
              target="_blank" 
              rel="noreferrer"
              className="group block bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900/50 transition-all flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg">
                  <Code size={24} />
                </div>
                <ExternalLink size={20} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.name}
              </h4>
              <p 
                className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1"
                dangerouslySetInnerHTML={{ __html: project.description }}
              />
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
