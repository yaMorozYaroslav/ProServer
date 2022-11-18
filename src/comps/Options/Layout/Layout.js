import React from 'react';
import {Outlet, Link} from "react-router-dom";
import styles from'./Layout.module.css';
import {useLocation} from "react-router-dom";

import {useDispatch, useSelector} from 'react-redux'
import {closeContact, openContact} from '../../../Redux/openSlice'

export const Layout = () => {
	const location = useLocation();
	const {pathname} = location;
	const splitLocation = pathname.split("/")
	
	const dispatch = useDispatch()
	const selectContact = state => state.open.contact
	const contact = useSelector(selectContact)
	
	React.useEffect(()=>{
	   if(splitLocation[1]==="contacts") dispatch(openContact()) 
	   if(splitLocation[1]!=="contacts") dispatch(closeContact())
		},[location])
	React.useEffect(()=>{
	     console.log(contact)
	    //if(contact === true) console.log(contact)
		},[contact])
	return(
		<>
		  <nav className={styles.nav}>
		    <div className={styles.div}>
		      <button className={splitLocation[1]===""
		                        ?styles.bud:styles.but}>
		        <Link className={splitLocation[1]===""?styles.current:styles.murrent}
		              to="/">Introduction
		        </Link>
		      </button>
		      <button className={splitLocation[1]==="profile"?styles.bud:styles.but}>
		        <Link className={splitLocation[1]==="profile"?styles.current:styles.murrent} 
		              to="/profile">Profile
		        </Link>
		       </button>
		       <button className={splitLocation[1]==="projects"
		                        ?styles.bud:styles.but}>
		          <Link  className={splitLocation[1]==="projects"
		                 ?styles.current:styles.murrent}
		                 to="/projects">Projects</Link>
		     </button >
		     <button className={splitLocation[1]==="contacts"
		                        ?styles.bud:styles.but}>
		          <Link  className={splitLocation[1]==="contacts"
		                           ?styles.current:styles.murrent} 
		                           to="/contacts">Contacts</Link>
		     </button>
		      </div>
		     </nav>

		     <div className={styles.outlet}><Outlet /></div>
		     <div className={styles.layout}></div>
		     </>		        
           )
         };
