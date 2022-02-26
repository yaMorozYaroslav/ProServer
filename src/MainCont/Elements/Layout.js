import {Outlet, Link} from "react-router-dom";

export const Layout = () => {
	return(
		<>
		  <nav>
		    <ul>
		      <button>
		        <Link to="/">Home</Link>
		       </button>
		       <li>
		         <Link to="/profile">Profile</Link>
		       </li>
		       <li>
		          <Link to="/projects">Projects</Link>
		     </li>
		     <li>
		          <Link to="/contacts">Contacts</Link>
		     </li>
		      </ul>
		     </nav>

		     <Outlet />
		     </>		        
           )
         };