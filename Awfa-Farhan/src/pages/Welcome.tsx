import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  // Function to handle screen click
  const handleClick = () => {
    navigate('/Home');
  };

  return (
    <motion.div
      className="relative flex items-center justify-center w-screen h-screen p-5 bg-cover bg-center cursor-pointer"
      onClick={handleClick} // Navigate on screen click
    >
      {/* Animated Window Controls */}
      <motion.div
        className="absolute top-5 left-5 flex gap-2 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1, delay: 1 }} // Adjust delay and duration as needed
      >
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </motion.div>

      {/* Animated container for ASCII art and text */}
      <motion.div
        className="absolute inset-0 m-3 p-10 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl ring-2 ring-black/10 ring-offset-2 flex flex-col items-center justify-center z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 1 }} // Adjust duration as needed
      >
        {/* ASCII Art */}
        <motion.pre
          className="whitespace-pre-wrap text-xs mb-5"
          style={{ color: '#3b3d41', fontFamily: 'monospace' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.5 }} // Adjust delay and duration as needed
        >
          {`                                                                                                    
    █████████                      ██████               ███████████                     █████                           
    ███░░░░░███                    ███░░███             ░░███░░░░░░█                    ░░███                            
   ░███    ░███  █████ ███ █████  ░███ ░░░   ██████      ░███   █ ░   ██████   ████████  ░███████    ██████   ████████   
   ░███████████ ░░███ ░███░░███  ███████    ░░░░░███     ░███████    ░░░░░███ ░░███░░███ ░███░░███  ░░░░░███ ░░███░░███  
   ░███░░░░░███  ░███ ░███ ░███ ░░░███░      ███████     ░███░░░█     ███████  ░███ ░░░  ░███ ░███   ███████  ░███ ░███  
   ░███    ░███  ░░███████████    ░███      ███░░███     ░███  ░     ███░░███  ░███      ░███ ░███  ███░░███  ░███ ░███  
   █████   █████  ░░████░████     █████    ░░████████    █████      ░░████████ █████     ████ █████░░████████ ████ █████ 
   ░░░░░   ░░░░░    ░░░░ ░░░░     ░░░░░      ░░░░░░░░    ░░░░░        ░░░░░░░░ ░░░░░     ░░░░ ░░░░░  ░░░░░░░░ ░░░░ ░░░░░  
  `}
        </motion.pre>
        {/* Text Content */}
        <motion.div
          className="px-4 text-center text-[16px] font-normal leading-[21px]"
          style={{ color: '#3b3d41' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 1 }} // Adjust delay and duration as needed
        >
          <p>
            To access my personal website <em className="font-bold">CLICK SCREEN</em> to continue...
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Welcome;
