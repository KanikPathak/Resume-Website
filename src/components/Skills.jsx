import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "C++", proficiency: 85 },
  { name: "HTML/CSS", proficiency: 90},
  { name: "JavaScript", proficiency: 70},
  { name: "Python", proficiency: 75},
  { name: "React", proficiency: 65},
  { name: "Pytorch", proficiency: 70},
  { name: "Bootstrap & Tailwind CSS", proficiency: 90},
  { name: "Django", proficiency: 50},
  { name: "Figma", proficiency: 80},
  { name: "AI/ML/DL", proficiency: 40},
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-teal-500">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-teal-500 mb-2">
              {skill.name}
            </h3>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <motion.div
                className="bg-teal-500 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.proficiency}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
