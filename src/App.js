import React from 'react'
import Navbaar from './components/Navbaar'
import Home from './components/Home'
import Mail from './components/Mail'
import Footer from './components/Footer'
import Lastfooter from './components/Lastfooter'
import About1 from './components/About1'
import About2 from './components/About2'
import About4 from './components/About4'
import Activityhead from './components/Activityhead'
import Activity from './components/Activity'
import Activity2 from './components/Activity2'
import Activity3 from './components/Activity3'
import Activity4 from './components/Activity4'
import Activity5 from './components/Activity5'
import Activity6 from './components/Activity6'
import Activity7 from './components/Activity7'
import Activity8 from './components/Activity8'
import Donateform from './components/Donateform'

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import About3 from './components/About3'; 
import Support from './components/Support'
import Emergency from './components/Emergency'
import Donate from './components/Donate'
import Blog from './components/Blog'





export default function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Navbaar/>
        </div>
        <div>

          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About3/>}/>
          <Route path="/Support" element={<Support/>}/>
          <Route path="/Activity" element={<Activity/>}/>
          <Route path="/abhay" element={<Donate/>}/>
          <Route path="/emergency" element={<Emergency/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/SPEAKS" element={<About1/>}/>
          <Route path="/PET" element={<About2/>}/>
          <Route path="/PAWS" element={<About3/>}/>
          <Route path="/POLICY" element={<About4/>}/>
          <Route path="/init" element={<Activity2/>}/>
          <Route path="/abc" element={<Activity3/>}/>
          <Route path="/save" element={<Activity4/>}/>
          <Route path="/treat" element={<Activity5/>}/>
          <Route path="/low" element={<Activity6/>}/>
          <Route path="/ipd" element={<Activity8/>}/>
          <Route path="/volunteen" element={<Activity7/>}/>
          <Route path="/donateform" element={<Donateform/>}/>
          


          


          </Routes>
      
        </div>
        
        <div><Mail/></div>
        <div><Footer/></div>
        <div><Lastfooter/></div>
        </BrowserRouter>
        
      </div>
    
  )
}
