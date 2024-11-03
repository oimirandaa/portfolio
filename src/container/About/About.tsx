import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import './About.scss'
import {AppWrap} from '../../wrapper'


interface AboutObj {
  id: number,
  title: string,
  description: string,
  imageUrl: string,
}

async function fetchAbouts(): Promise<AboutObj[]>{
  const response = await fetch('http://localhost:8080/about/all');
  return await response.json();
}

const About = () => {
  const [abouts, setAbouts] = useState<AboutObj[]>([]);

  useEffect(() => {
      fetchAbouts()
      .then(data => setAbouts(data))
      .catch(error => console.error('Error fetching abouts:', error));
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about: AboutObj, index: number) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imageUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};


export default AppWrap(About, 'about', '');