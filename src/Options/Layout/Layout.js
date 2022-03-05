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
		      <button className={splitLocation[1]===""
		                        ?styles.bud:styles.but}>
		        <Link className={splitLocation[1]===""
		                        ?styles.current:styles.murrent}
		                         to="/">Introduction</Link>
		       </button>
		       <button className={splitLocation[1]==="profile"
		                        ?styles.bud:styles.but}>
		         <Link className={splitLocation[1]==="profile"
		                         ?styles.current:styles.murrent} 
		                         to="/profile">Profile</Link>
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

		     <Outlet />
		     </>		        
           )
         };