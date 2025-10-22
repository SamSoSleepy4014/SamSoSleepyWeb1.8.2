import { motion } from 'motion/react';

export function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full p-12 rounded-lg backdrop-blur-md bg-black/30 border border-white/10"
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
        }}
      >
        <motion.h1 
          className="text-white mb-6 text-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
          }}
          transition={{ 
            duration: 1,
            delay: 0.2
          }}
          style={{
            textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(59, 130, 246, 0.5)',
          }}
        >
          <motion.span
            animate={{
              textShadow: [
                '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(59, 130, 246, 0.5)',
                '0 0 30px rgba(255, 255, 255, 0.8), 0 0 50px rgba(255, 255, 255, 0.5), 0 0 80px rgba(59, 130, 246, 0.8)',
                '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(59, 130, 246, 0.5)',
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            Welcome to SamSoSleepyWeb 1.8.2
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-white/90 mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Explore our collection of addons, UI modifications, and various tools for your gaming experience.
        </motion.p>
        
        <motion.p 
          className="text-white/90 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          My Discord:{' '}
          <a 
            href="https://discord.gg/FnmWw7nWyq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-200 underline transition-colors duration-200"
          >
            discord.gg/FnmWw7nWyq
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}
