import React, {FC} from 'react';
import {NavigationDots, SocialMedia} from '../components'


const AppWrap = (Component:FC , idName:string, classNames:string) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">@2024 OSCAR</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName}/>
    </div>
  );
};

export default AppWrap;