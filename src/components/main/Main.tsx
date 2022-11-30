import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './Main.css'
import Intro from './intro/Intro';
import Habilidades from './habilidades/Habilidades';
import Experiencia from './experiencia/Experiencia';

function Main() {
  return (
    <div className='main rounded-2xl max-h-full overflow-auto'>
      <Routes>
        <Route path='/' element={<Intro/>}/>
        <Route path='/habilidades' element={<Habilidades/>}/>
        <Route path='/experiencia' element={<Experiencia/>}/>

      </Routes>
    </div>
  )
}

export default Main