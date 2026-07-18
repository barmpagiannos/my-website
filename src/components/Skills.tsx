import { motion } from 'motion/react';
import { skills, languages, courses, qualities } from '../data';

// We'll mock a 'qualities' array if not directly in data.ts for completeness
const qualitiesList = ["Communication", "Teamwork", "Sociability"];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-10">
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Skills & Additional Info</h3>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Tech Skills */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Technical Skills</h4>
            <div className="space-y-4">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-blue-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {/* Languages */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Languages</h4>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4">
                    <div className="font-medium text-slate-900 dark:text-slate-100">{lang.name}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualities */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Qualities</h4>
              <div className="flex flex-wrap gap-3">
                {qualitiesList.map((quality, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50">
                    {quality}
                  </span>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Courses & Workshops</h4>
              <div className="space-y-4">
                {courses.map((course, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-blue-200 dark:border-blue-900/50">
                    <h5 className="font-medium text-slate-900 dark:text-slate-100">{course.name}</h5>
                    <div className="text-xs font-mono text-slate-500 mb-1">{course.date}</div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{course.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
