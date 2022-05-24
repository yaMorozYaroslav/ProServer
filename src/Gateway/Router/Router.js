import React from 'react'
import styles from'./Router.module.css'
import {BrowserRouter, Switch,
                Routes, Route, Navigate} from "react-router-dom"
import {Contacts} from "../../Options/Contacts/Contacts"
import {Profile} from "../../Options/Profile/Profile"
import {Projects} from "../../Options/Projects/Projects"
import {Layout} from "../../Options/Layout/Layout"
import {Home} from "../../Options/Intro/Intro"
import {GitHub0, Netlify0} from "../../Options/Projects/external"

export const Router = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(()=>{
    const timer = setTimeout(()=>{
      setOpen(true)
    }, 2700)
  return ()=>clearTimeout(timer)
  }, [])
  if(!open) return  <h1 className={styles.welcome}>Welcome.</h1>;  
   return(
     <BrowserRouter>
       <Routes>
          <Route path="/"   element={<Layout />}>
            <Route index        element={<Home />} />
            <Route path="profile"  element={<Profile />}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="contacts" element={<Contacts/>}/>
          </Route>
          <Route path="heroku" element={<Netlify0/>}/>
          <Route path="github" element={<GitHub0/>}/>
       </Routes>
      </BrowserRouter>
      )
}