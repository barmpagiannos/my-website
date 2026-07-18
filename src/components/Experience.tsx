import { motion } from 'motion/react';
import { experience } from '../data';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-10">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Experience</h3>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
        </div>

        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-6 border-l border-slate-200 dark:border-slate-800 md:pl-0 md:border-none md:grid md:grid-cols-4 md:gap-8 group">
              <div className="md:hidden absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-50 dark:ring-slate-950"></div>
              
              <div className="hidden md:block col-span-1 pt-1 text-sm font-mono text-slate-500 dark:text-slate-400">
                {exp.period}
              </div>

              <div className="col-span-3 md:bg-white md:dark:bg-slate-900 md:border md:border-slate-200 md:dark:border-slate-800 md:p-6 md:rounded-xl md:shadow-sm md:group-hover:shadow-md md:group-hover:border-blue-200 md:dark:group-hover:border-blue-900/50 transition-all">
                <div className="md:hidden text-xs font-mono text-slate-500 mb-2">
                  {exp.period}
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-1">
                  {exp.role}
                </h4>
                <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-4">
                  <Briefcase size={16} />
                  <span>{exp.company}, {exp.location}</span>
                </div>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 text-sm leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
