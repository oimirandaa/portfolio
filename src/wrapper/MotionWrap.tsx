import {motion} from 'framer-motion';


import React, {FC} from 'react'

const MotionWrap = (Component: FC, className: string) => function HOC() {
  return (
    <motion.div
      whileInView={{y : [100, 50, 0], opacity:[0,0,1]}}
      transition={{duration: 0.5}}
      className={`${className} app__flex`}
    >
      <Component />
    </motion.div>
  )
}

export default MotionWrap