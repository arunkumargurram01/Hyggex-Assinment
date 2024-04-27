/* import React from "react";
import open from "../Images/open.png";
import styles from './Compo.module.css'


const Study = () => {
  return (
    <>
      <div className="Font-bold text-center text-white">
        <div
          className="w-11/12 h-[250px]  m-auto rounded-3xl bg-gradient-to-tr from-blue-500 to-blue-800
             sm:w-9/12 h-52
             md:w-8/12 h-52 
             lg:w-6/12 h-[360px]
             xl:h-[420px]  
        "
        id={styles.card}
        >
          <div className="flex justify-between w-11/12 m-auto pt-4">
            <img src={open} className="w-6 h-6"></img>
            <img src={open} className="w-6 h-6"></img>
          </div>
          <div className="grid place-items-center font-semibold font-sans text-3xl  h-4/5
                    lg:text-5xl">
            <div className="text-center">9 + 6 + 7x - 2x - 3</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Study;
 */
import React, { useState } from 'react';
import styles from './Compo.module.css'
import bulb from '../Images/bulb.png'
import volume from '../Images/volume.png'

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    alert()
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="font-bold text-center text-white mb-4">
      <div
        className={`relative w-11/12 h-[250px] m-auto rounded-3xl bg-gradient-to-tr from-blue-500 to-blue-800 
                     sm:w-9/12  md:w-8/12 md:h-48 lg:w-6/12 h-[360px] xl:h-[420px] 
                     `}
        id={styles.card}
        onClick={handleFlip}
      >
        <div className="absolute w-full h-full front cursor-pointer">
          <div className="flex justify-between w-11/12 m-auto pt-4">
            <img src={bulb} className="w-8 h-8 cursor-pointer " alt="icon"></img>
            <img src={volume} className="w-8 h-8 cursor-pointer" alt="icon"></img>
          </div>
          <div className="grid place-items-center font-semibold font-sans text-3xl h-4/5 lg:text-5xl">
            <div className="text-center">9 + 6 + 7x - 2x - 3</div>
          </div>
        </div>
        <div className="absolute w-full h-full back">
          {/* Content for the back side of the card */}
        </div>
      </div>
    </div>
  );
};
export default FlipCard;