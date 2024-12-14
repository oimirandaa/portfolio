import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import { Tooltip } from 'react-tooltip'
import './Skills.scss'
import {AppWrap, MotionWrap} from '../../wrapper'

interface SkillsObj {
  name:string,
  bgColor: string,
  imageUrl: string,
}
interface ExperienceObj {
  year: string,
  works: WorksExpObj[];
}
interface WorksExpObj{
  name: string,
  company: string,
  description: string,
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
  }, [])

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

        <motion.div className="app__skills-exp">
          {experience.map((experience) => (

            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>

              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{opacity: [0, 1]}}
                      transition={{ duration : 0.5}}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}>

                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.description}
                    </Tooltip>
                  </>
                ))}

              </motion.div>
            </motion.div>


          ))}

        </motion.div>
      </div>
    </>
  )
};

export default AppWrap(
  MotionWrap(Skills,'app__skills'),
  'skills',
  'app__whitebg');