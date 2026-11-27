import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';


import {
  FaPython, FaBrain, FaDatabase, FaChartBar, FaMicrochip, FaProjectDiagram, FaRobot, FaEye
} from 'react-icons/fa';
import {
  SiTensorflow, SiPytorch, SiScikitlearn, SiKeras, SiOpencv, SiPandas, SiNumpy,
  SiJupyter, SiMicrosoftazure, SiGooglecloud, SiDocker, SiGit, SiMysql,
  SiMongodb, SiPowerbi, SiTableau, SiAnaconda, SiLinux,
  SiHuggingface, SiLangchain
} from 'react-icons/si';
import { Skill } from '../types';

// Icon map — keys must match what you enter in DatoCMS "icon" field
const iconMap: { [key: string]: JSX.Element } = {
  // Core ML / DL
  FaPython: <FaPython />,
  SiTensorflow: <SiTensorflow />,
  SiPytorch: <SiPytorch />,
  SiKeras: <SiKeras />,
  SiScikitlearn: <SiScikitlearn />,
  SiHuggingface: <SiHuggingface />,
  SiLangchain: <SiLangchain />,
  // Computer Vision
  SiOpencv: <SiOpencv />,
  FaEye: <FaEye />,
  // Data & Analytics
  SiPandas: <SiPandas />,
  SiNumpy: <SiNumpy />,
  SiPowerbi: <SiPowerbi />,
  SiTableau: <SiTableau />,
  SiMatlaboctave: <FaChartBar />,  // MATLAB fallback (SiMatlaboctave not in this react-icons version)
  FaChartBar: <FaChartBar />,
  // Databases
  SiMysql: <SiMysql />,
  SiMongodb: <SiMongodb />,
  FaDatabase: <FaDatabase />,
  // Cloud & Dev Tools
  SiMicrosoftazure: <SiMicrosoftazure />,
  SiGooglecloud: <SiGooglecloud />,
  SiDocker: <SiDocker />,
  SiGit: <SiGit />,
  SiJupyter: <SiJupyter />,
  SiAnaconda: <SiAnaconda />,
  SiLinux: <SiLinux />,
  // Concepts (generic icons)
  FaBrain: <FaBrain />,
  FaRobot: <FaRobot />,
  FaMicrochip: <FaMicrochip />,
  FaProjectDiagram: <FaProjectDiagram />,
};


const Skills: React.FC = () => {

  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }

    fetchSkills()
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaBrain />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
