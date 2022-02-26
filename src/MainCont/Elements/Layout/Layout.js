import {Outlet, Link} from "react-router-dom";
import styles from './Layout.module.css';

export const Layout = () => {
	return(
		<>
		  <nav className={styles.nav}>
		    <ul>
		      <button className={styles.but}>
		        <Link to="/">Home</Link>
		       </button>
		       <button className={styles.but}>
		         <Link to="/profile">Profile</Link>
		       </button>
		       <button className={styles.but}>
		          <Link to="/projects">Projects</Link>
		     </button>
		     <button className={styles.but}>
		          <Link to="/contacts">Contacts</Link>
		     </button>
		      </ul>
		     </nav>

		     <Outlet />
		     </>		        
           )
         };