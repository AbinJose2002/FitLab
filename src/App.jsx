import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Labs from "./components/Labs/Labs"
import Curriculuim from "./components/Curriculum/Curriculuim"
import Contact from "./components/Contact/Contact"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import LabPage from "./components/LabPage/LabPage"
import KMap from "./components/kmap/kmap"
import NumConvert from './components/numconvert/NumConvert'
import Digital from './components/dfca/Digital'
import Exercise from './components/dbms/Exercise';
import Result from './components/dbms/Result';
import Dbms from "./components/dbms/Dbms"
import { useState } from "react"
const App = () => {
  const [currentExercise, setCurrentExercise] = useState(null);
  const [score, setScore] = useState(null);

  const handleSelectExercise = (exerciseNumber) => {
    setCurrentExercise(exerciseNumber);
    setScore(null);
  };

  const handleComplete = (finalScore) => {
    setScore(finalScore);
    setCurrentExercise(null);
  };
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
      <Routes>
        <Route path='/' element={<div><Hero/>
      <About/>
      <Labs/>
      <Curriculuim/>
      <Contact/></div>}></Route>
      <Route path='/dfca' element={<Digital/>}></Route>
      <Route path='/dbms' element={<Dbms />}></Route>
      <Route path='/labs' element={<LabPage/>}></Route>
      <Route path='/kmap' element={<KMap/>}></Route>
      <Route path='/num' element={<NumConvert/>}></Route>
      <Route path="/exercise/:exerciseNumber" element={<Exercise onComplete={handleComplete} />} />
      <Route path="/result" element={<Result />} />
        <Route path="*" element={<Dbms onSelectExercise={handleSelectExercise} />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
