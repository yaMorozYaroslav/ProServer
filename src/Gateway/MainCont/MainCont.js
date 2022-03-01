import React from 'react';
import styles from'./MainCont.module.css'; 
import {BrowserRouter, Switch,
                Routes, Route} from "react-router-dom";
import {Contacts} from "../../Options/Contacts/Contacts";
import {Profile} from "../../Options/Profile/Profile";
import {Projects} from "../../Options/Projects/Projects";
import {Layout} from "../../Options/Layout/Layout";
import {Home} from "../../Options/Home/Home";

export const MainCont = () => {
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