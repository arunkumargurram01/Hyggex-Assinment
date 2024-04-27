import React from "react";
import open from '../Images/open.png'
import styles from './Compo.module.css'

const Quiz = () => {
  return (
    <>
      <div className="Font-bold text-center text-white">
      <div
          className="w-11/12 h-[250px] text-3xl m-auto rounded-3xl bg-gradient-to-tr from-blue-500 to-blue-800
             sm:w-9/12 h-52
             md:w-8/12 h-52 
             lg:w-6/12 h-[360px]
             xl:h-[420px]  
        "
        id={styles.card}
        >
          Quiz
        </div>

      </div>
    </>
  );
};

export default Quiz;
