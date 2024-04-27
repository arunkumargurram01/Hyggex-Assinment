import React from "react";
import home from '../Images/home.png'
import { useLocation } from "react-router-dom";

const Body = () => {
  const location = useLocation();
  const path = location.pathname
  const pname = path.slice(1)
  console.log(pname)
  return (
    <>
      <div className="ml-8 sm:ml-16 m-2">
        <div className=" flex p-1 font-sans text-sm font-light mb-2">
            <img src={home} className="w-6  pl-1"></img>
            <span className="">&nbsp; &gt; Flashcard &gt; Mathematics &gt;  </span>
            <span className="font-semibold">{' '}Relation and Function</span>
        </div>
        <div className="">
          <h1 class="text-2xl font-bold bg-gradient-to-t from-blue-600 to-blue-900 inline-block text-transparent bg-clip-text  ml-2 my-2" >
            Relations and Functions (Mathematics)
          </h1>
        </div>

      </div>
    </>
  );
};

export default Body;
