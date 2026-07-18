import { motion } from 'motion/react';
import { education } from '../data';
import { GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">About Me</h3>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
          </div>
          <div className="text-slate-600 dark:text-slate-400 space-y-4 leading-relaxed">
            <p>
              My name is Barbagiannos Vasileios and I am a graduate of the Department of Electrical and Computer Engineering of the Aristotle University of Thessaloniki <strong className="font-semibold text-slate-900 dark:text-slate-200">(Integrated Master)</strong>. I specialized in the field of electronics and computers, as I am involved in and enjoy programming and robotics. My interests also include data analysis and machine learning.
            </p>
            <p>
              My thesis focused on the use of <strong className="font-semibold text-slate-900 dark:text-slate-200">Deep Learning</strong> in <strong className="font-semibold text-slate-900 dark:text-slate-200">Telecommunications</strong> and was titled <strong className="font-semibold text-slate-900 dark:text-slate-200">"An Introduction to Deep Learning for the Physical Layer"</strong>. Its summary is:
            </p>
            <p>
              This thesis explores a communication system implemented as an end-to-end <strong className="font-semibold text-slate-900 dark:text-slate-200">Autoencoder</strong>. The primary objective is the joint optimization of the transmitter and receiver. This concept is further extended to multi-user networks involving multiple transmitters and receivers (<strong className="font-semibold text-slate-900 dark:text-slate-200">MIMO systems</strong>). <strong className="font-semibold text-slate-900 dark:text-slate-200">Radio Transformer Networks (RTNs)</strong> are introduced as a framework to incorporate expert domain knowledge into the deep learning model. Finally, the application of <strong className="font-semibold text-slate-900 dark:text-slate-200">Convolutional Neural Networks (CNNs)</strong> on raw IQ samples for <strong className="font-semibold text-slate-900 dark:text-slate-200">modulation classification</strong> is presented, demonstrating performance competitive with traditional methods based on hand-crafted <strong className="font-semibold text-slate-900 dark:text-slate-200">expert features</strong>.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Education</h3>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="relative pl-6 border-l border-slate-200 dark:border-slate-800">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-slate-50 dark:ring-slate-950"></div>
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">{edu.degree}</h4>
                  <span className="text-xs font-mono text-slate-500 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded">
                    {edu.period}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2">
                  <GraduationCap size={16} />
                  <span>{edu.institution}, {edu.location}</span>
                </div>
                <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
