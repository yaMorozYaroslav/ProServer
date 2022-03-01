import React from 'react';
import {Outlet, Link} from "react-router-dom";
import styles from'./Layout.module.css';
import {useLocation} from "react-router-dom";

export const Layout = () => {
	const location = useLocation();
	const {pathname} = location;
	const splitLocation = pathname.split("/");
	return(
		<>
		  <nav >
		    <div className={styles.div}>
		      <button className={splitLocation[1]===""?styles.current:styles.murrent}>
		        <Link className={styles.link} to="/">Home</Link>
		       </button>
		       <button className={splitLocation[1]==="profile"?styles.current:styles.murrent}>
		         <Link to="/profile">Profile</Link>
		       </button>
		       <button className={splitLocation[1]==="projects"?styles.current:styles.murrent}>
		          <Link to="/projects">Projects</Link>
		     </button>
		     <button className={splitLocation[1]==="contacts"?styles.current:styles.murrent}>
		          <Link to="/contacts">Contacts</Link>
		     </button>
		      </div>
		     </nav>

		     <Outlet />
		     </>		        
           )
         };