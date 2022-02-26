import React from 'react';
import styles from'./MainCont.module.css'; 
import {BrowserRouter, Switch,
                Routes, Route} from "react-router-dom";
import {Contacts} from "../../Elements/Contacts";
import {Profile} from "../../Elements/Profile";
import {Projects} from "../../Elements/Projects";
import {Layout} from "../../Elements/Layout/Layout";
import {Home} from "../../Elements/Home";

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