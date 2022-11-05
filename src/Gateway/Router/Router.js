import React from 'react'
import styles from'./Router.module.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Contacts} from "../../Options/Contacts/Contacts"
import {Profile} from "../../Options/Profile/Profile"
import {Projects} from "../../Options/Projects/Projects"
import {Layout} from "../../Options/Layout/Layout"
import {Home} from "../../Options/Intro/Intro"
import {GitHub0, Netlify0,
        GitHub1, Netlify1} from "../../Options/Projects/extra/external"

import {useSelector} from 'react-redux'

export const Router = () => {
  const welcState = useSelector((state) => state.welc)
	
  const [open, setOpen] = React.useState(false);

  React.useEffect(()=>{
    const timer = setTimeout(()=>{
      setOpen(true)
    }, 2700)
  return ()=>clearTimeout(timer)
  }, [open])
   return(
     <BrowserRouter>
       <Routes>
          <Route path="/"   element={<Layout />}>
            <Route index        element={<Home />} />
            <Route path="profile"  element={<Profile />}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="contacts" element={<Contacts/>}/>
          </Route>
          <Route path="netlify0" element={<Netlify0/>}/>
          <Route path="github0" element={<GitHub0/>}/>
          <Route path="netlify1" element={<Netlify1/>}/>
          <Route path="github1" element={<GitHub1/>}/>
       </Routes>
      </BrowserRouter>
      )
}
