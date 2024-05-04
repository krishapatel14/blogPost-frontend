import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Route, Routes } from 'react-router-dom';
import  Sidebar  from './components/sidebar';
import BlogPost from './components/blogPost';
import Feeds from './components/feeds';


function App() {
  return (
    <div>
      {/* <Routes>
        <Route path='/' element={sidebar}></Route>
      </Routes> */}
      <Sidebar/>
      <BlogPost/>
      <Feeds/>
    </div>
   
  )
}

export default App
