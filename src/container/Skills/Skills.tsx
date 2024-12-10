import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import ReactTooltip from 'react-tooltip'
import './Skills.scss'
import {AppWrap} from '../../wrapper'

interface SkillsObj {
  name:string,
  bgColor: string,
  imageUrl: string,
}
interface ExperienceObj {

}

const Skills = () => {

  const [experience, setExperience] = useState<ExperienceObj[]>([])
  const [skills, setSkills] = useState<SkillsObj[]>([])

  useEffect(() => {
    fetch('http://localhost:8080/api/experience')
      .then(response => response.json())
      .then((data) => {
        setExperience(data);
      })
      .catch(error => console.error('Error fetching work:', error));

    fetch('http://localhost:8080/api/skills/all')
      .then(response => response.json())
      .then((data) => {
        setSkills(data);
      })
      .catch(error => console.error('Error fetching work:', error));
  })

  return (
    <>
      <h2 className="head-text">Skills and Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{ duration : 0.5}}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor}}>
                <img src={skill.imageUrl} alt={skill.name}/>
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
};

export default Skills;