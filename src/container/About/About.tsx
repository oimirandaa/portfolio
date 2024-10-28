import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import "./About.scss"
import {images} from '../../constants'

const abouts = [
  {title: "Front End Development", description: "I can Code", url:images.about01},
  {title: "Back End Development", description: "I can Code", url:images.about02},
  {title: "Data Analysis and Data Science", description: "I can Code", url:images.about03},
  {title: "Cloud Development", description: "I can Code", url:images.about04},
];

const About = () => {
  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = `*[_type == "abouts"]`;
  //
  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   })
  // }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.url} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};


export default About;