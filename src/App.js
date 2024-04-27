import "tailwindcss/tailwind.css";
import { Routes, Link, Route } from "react-router-dom";
import Home from "./Components/Home";
import Card from "./Components/Card";
import Quiz from "./Components/Quiz";
import Test from "./Components/Test";
import Others from "./Components/Others";
import Study from "./Components/Study";
import Game from "./Components/Game";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path='/study'  element={<Study/>} />
          <Route path="/quiz"   element={<Quiz />} />
          <Route path="/test"   element={<Test />} />
          <Route path="/game"   element={<Game />} />
          <Route path="/others" element={<Others />} />

          <Route index element={<Study/>} />
        </Route>
        {/* <Route path="study" element={<Card />} /> */}

      </Routes>
    </>
  );
}

export default App;
