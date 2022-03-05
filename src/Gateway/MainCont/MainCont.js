import React from 'react';
import styles from'./MainCont.module.css'; 
import {BrowserRouter, Switch,
                Routes, Route} from "react-router-dom";
import {Contacts} from "../../Options/Contacts/Contacts";
import {Profile} from "../../Options/Profile/Profile";
import {Projects} from "../../Options/Projects/Projects";
import {Layout} from "../../Options/Layout/Layout";
import {Home} from "../../Options/Intro/Intro";

export const MainCont = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(()=>{
    const timer = setTimeout(()=>{
      setOpen(true)
    }, 2000)
  return ()=>clearTimeout(timer)
  }, [])
  if(!open) return <h1 className={styles.welcome}>You are welcome.</h1>
   return(
     <BrowserRouter>
       <Routes>
          <Route path="/"   element={<Layout />}>
            <Route index        element={<Home />} />
            <Route path="profile"  element={<Profile />}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="contacts" element={<Contacts/>}/>
          </Route>
       </Routes>
      </BrowserRouter>
      )
}