import { NavLink, Outlet } from "react-router-dom";
import styles from "./Compo.module.css";
import open from "../Images/open.png";
import hyggexlogo from "../Images/hyggex.png";
import addbutton from '../Images/add.png'

import next from '../Images/next.png'
import back from '../Images/left.png'
import reload from '../Images/reload.png'
import frame from '../Images/select.png'


const Card = () => {
  return (
    <>
      <div className="mt-4 sm:mt-4 md:mt-6 lg:mt-8 ">
        <div
          className="flex w-11/12 h-6  text-center justify-around m-auto my-2 font-semibold mb-4 font-sans 
                          sm:w-9/12 
                          md:w-8/12 md:text-xl mb-8
                          lg:w-1/2   
        "
        >
          <NavLink to="/study" className={styles.link}>
            Study
          </NavLink>
          <NavLink to="/quiz" className={styles.link}>
            Quiz
          </NavLink>
          <NavLink to="/test" className={styles.link}>
            Test
          </NavLink>
          <NavLink to="/game" className={styles.link}>
            Game
          </NavLink>
          <NavLink to="/others" className={styles.link}>
            Others
          </NavLink>
        </div>

        <Outlet />

        
        <div className="flex justify-around text-center w-11/12 h-6  text-center  m-auto my-2 font-semibold  sm:w-9/12 md:w-8/12 md:text-xl mb-8 lg:w-1/2 ">
          <div className="flex justify-around text-center  w-[100%]">
            <img src={reload} className="w-10 h-10 mt-2 cursor-pointer"></img>
            <div className="flex text-center justify-around w-1/2 ">
              <img src={back} className="w-10 h-10 mt-2 cursor-pointer"></img>
              <h1 className="font-sans font-bold mt-4 ">01/10</h1>
              <img src={next} className="w-[54px] h-[54px] mb-2 cursor-pointer"></img>
            </div>
            <img src={frame} className="w-8 h-8 mt-2 cursor-pointer"></img>
          </div>
        </div>

        <div className="flex w-11/12 m-auto md:w-10/12 justify-between mb-14 mt-14">
          <div className="font-bold font-large md:text-2xl"><img src={hyggexlogo}></img></div>
          <div className="flex justify-between text-center font-bold md:text-2xl bg-gradient-to-t from-blue-600 to-blue-900 inline-block text-transparent bg-clip-text cursor-pointer">
            <div>
              <img src={addbutton} alt="Create button" className="w-6  text-center md:mt-[3px] md:w-8 mr-1"></img>
            </div>
            <div>Create Flashcard</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
