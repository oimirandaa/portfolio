import React, {useState} from 'react'
import {motion} from 'framer-motion'

import './Work.scss'

const Work = () => {

  // const [activeFiler, setActiveFiler] = useState("All");
  // const [animateCard, setAnimateCard] = useState({y:0, opacity:1});
  // const handleWorkFilter = (item:string)=> {
  //
  // }

  return (
    <>
      <h2 className="head-text">My Creative <span>Work Portfolio</span></h2>

      {/*<div className="app__work-filter">*/}
      {/*  {['UI/UX', 'Web App', 'Back End', 'Java', 'All'].map((item, index) => (*/}
      {/*    <div key={index}*/}
      {/*    onClick={() => handleWorkFilter(item)}*/}
      {/*         className="app__work-filter-item app__flex p-text ${activeFilter === item ? 'item.active' : ''}"*/}
      {/*    >*/}
      {/*      {item}*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}

      {/*<motion.div*/}
      {/*  animate={animateCard}*/}
      {/*  transition={{duration:0.5, delayChildren:0.5}}*/}
      {/*  className="app_work-portfolio"*/}
      {/*>*/}

      {/*</motion.div>*/}
    </>
  )
};

export default Work;