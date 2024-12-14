import {motion} from 'framer-motion'
import {HiChevronLeft, HiChevronRight} from 'react-icons/hi'

import {AppWrap, MotionWrap} from '../../wrapper'
import React, {useEffect, useState} from 'react'
import "./Testimonial.scss"

interface TestimonialObj{
  name: string,
  companyName: string,
  imageURL: string,
  feedback: string,
}

interface BrandsObj{
  id: string,
  name: string,
  imageURL: string,
}

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState<TestimonialObj[]>([]);
  const [brands, setBrands] = useState<BrandsObj[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index: number) => {
    setCurrentIndex(index)
  }
  useEffect(() => {
    fetch('http://localhost:8080/api/testimonial/all')
      .then(response => response.json())
      .then((data) => {
        setTestimonial(data);
      })
      .catch(error => console.error('Error fetching testimonials:', error));

    fetch('http://localhost:8080/api/brands/all')
      .then(response => response.json())
      .then(data => setBrands(data))
      .catch(error => console.error('Error fetching Brands:', error));
  }, [])

  const testimonialObj = testimonial[currentIndex]



  return (
    <>
      {testimonial.length > 0 && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={testimonialObj.imageURL} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonialObj.feedback}</p>
              <div>
                <h4 className="bold-text">{testimonialObj.name}</h4>
                <h5 className="p-text">{testimonialObj.companyName}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app_flex">
            <div className="app__flex" onClick={() =>
              handleClick(currentIndex === 0 ? testimonial.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={() =>
              handleClick(currentIndex === testimonial.length - 1  ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {
          brands.map((brand) => (
            <motion.div
              whileInView={{ opacity: [0, 1]}}
              transition={{duration: 0.5, type:'tween'}}
              key={brand.id}
            >
              <img src={brand.imageURL} alt={brand.name}/>

            </motion.div>
          ))
        }
      </div>
    </>
  )
};

export default AppWrap(
  MotionWrap(Testimonial,'app__testimonial'),
  'testimonial',
  'app__primarybg');