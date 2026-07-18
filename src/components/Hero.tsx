import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { personalDetails } from '../data';

export default function Hero() {
  return (
    <section className="pt-12 md:pt-24 pb-12" id="hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-start md:items-center"
      >
        <div className="flex flex-col gap-6 flex-1">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Hi, I'm {personalDetails.name}.
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium">
              {personalDetails.title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Specializing in data analysis, machine learning and robotics. Graduate of the Aristotle University of Thessaloniki.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a href={`mailto:${personalDetails.email}`} className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail size={18} className="text-slate-500" />
                <span>{personalDetails.email}</span>
              </a>
              <a href={`tel:${personalDetails.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Phone size={18} className="text-slate-500" />
                <span>{personalDetails.phone}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-slate-500" />
                <span>Thessaloniki, Greece</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-slate-500 dark:text-slate-400">
              <a
                href={personalDetails.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 hover:shadow-md transition-all duration-300 bg-slate-200/50 dark:bg-slate-800/50 px-3 py-1.5 rounded-md"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={personalDetails.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 hover:shadow-md transition-all duration-300 bg-slate-200/50 dark:bg-slate-800/50 px-3 py-1.5 rounded-md"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative shrink-0 w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0">
          <div className="absolute inset-0 rounded-full border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
            {/* Note: The user can upload their profile picture to the public folder as 'profile.jpg' */}
            <img 
              src="/profile.jpg" 
              alt="Vasileios Barmpagiannos" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=Vasileios+Barmpagiannos&size=512&background=random";
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
