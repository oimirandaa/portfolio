import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import {AiFillEye} from 'react-icons/ai'
import './Work.scss'
import {AppWrap} from '../../wrapper'

interface WorksObj{
  id: number,
  title: string,
  description: string,
  projectLink: string,
  codeLink: string,
  imageURL: string,
  tags: {
    tag1: string,
    tag2: string,
    tag3: string,
    tag4: string,
    tag5: string,
  }
}
// interface Tags{
//   tag1: string,
//   tag2: string,
//   tag3: string,
//   tag4: string,
//   tag5: string,
// }

const Work = () => {

  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({y:0, opacity:1});
  const [works, setWorks] = useState<WorksObj[]>([]);
  const [filterWork, setFilterWork] = useState<WorksObj[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/work/all')
      .then(response => response.json())
      .then((data) => {
        setWorks(data);
        setFilterWork(data);
      })
      .catch(error => console.error('Error fetching work:', error));
  })

  const handleWorkFilter = (item:string)=> {
    setActiveFilter(item);
    setAnimateCard({y:100, opacity:0});

    setTimeout(() => {
      setAnimateCard({y:0, opacity:1});

      if(item === 'All') {
        setFilterWork(works);
      }else{
        setFilterWork(works.filter((work) => work.tags.tag1.includes(item)));
      }
    }, 500);
  }

  return (
    <>
      <h2 className="head-text">My Creative <span>Work Portfolio</span></h2>

      <div className="app__work-filter">
        {['Web App', 'Back End', 'Java', 'Data Science', 'All'].map((item, index) => (
          <div key={index}
               onClick={() => handleWorkFilter(item)}
               className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{duration:0.5, delayChildren:0.5}}
        className="app_work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imageURL} alt={work.title}/>

              <motion.div
                whileHover={{scale:[0,1]}}
                transition={{duration:0.25, ease:'easeInOut', staggerChildren:0.5}}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale:[0,1]}}
                    whileHover={{scale:[1,0.9]}}
                    transition={{duration:0.25}}
                    className="app__flex"
                  >
                    <AiFillEye/>
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale:[0,1]}}
                    whileHover={{scale:[1,0.9]}}
                    transition={{duration:0.25}}
                    className="app__flex"
                  >
                    <AiFillEye/>
                  </motion.div>
                </a>


              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{marginTop:10}}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags.tag2}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
};

export default AppWrap(Work, 'work', 'app__primarybg');