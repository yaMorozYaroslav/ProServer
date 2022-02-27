import {Outlet, Link, NavLink} from "react-router-dom";
import styles from './Layout.module.css';

export const Layout = () => {
	return(
		<>
		  <nav className={styles.nav}>
		    <ul>
		      <button className={styles.but}>
		        <Link 
		            className={styles.link}
		            to="/">Home</Link>
		       </button>
		       <button className={styles.but}>
		         <Link className={styles.link} to="/profile"
		                  >Profile</Link>
		       </button>
		       <button className={styles.but}>
		          <Link 
                       className={styles.link}
		               to="/projects">Projects</Link>
		     </button>
		     <button className={styles.but}>
		          <Link
		             className={styles.link}
		             to="/contacts">Contacts</Link>
		     </button>
		      </ul>
		     </nav>

		     <Outlet />
		     </>		        
           )
         };