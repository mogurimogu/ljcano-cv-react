import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './Main.css'
import Intro from './intro/Intro';
import Habilidades from './habilidades/Habilidades';
import Experiencia from './experiencia/Experiencia';
import Formacion from './formacion/Formacion';

function Main() {
  return (
    <div className='main rounded-2xl max-h-full overflow-auto'>
      <Routes>
        <Route path='/' element={<Intro/>}/>
        <Route path='/habilidades' element={<Habilidades/>}/>
        <Route path='/experiencia' element={<Experiencia/>}/>
        <Route path='/formacion' element={<Formacion/>}/>

      </Routes>
    </div>
  )
}

export default Main