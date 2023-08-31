import React from 'react'
import Restaurant from './component/Project 1 (Food-Menu)/restaurant';
import ToDo from './component/Project 2 (ToDo)/ToDo';
import Temp from './component/Project 3 (WeatherAPI)/Temp';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';


const App = () => {

  return(
    <>
    <Routes>
      <Route path='/' element={<Navbar/> } >
        <Route index element={<Restaurant/>}/>
        <Route path='/todolist' element={<ToDo/>}/>
        <Route path='/weather' element={<Temp/>}/>
      </Route>
    </Routes>
    </>
  )
  
};

export default App;