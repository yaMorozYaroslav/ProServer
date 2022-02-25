import {Outlet, Link} from "react-router-dom";

export const Layout = () => {
	return(
		<>
		  <nav>
		    <ul>
		      <li>
		        <Link to="/">Home</Link>
		       </li>
		       <li>
		         <Link to="/profile">Profile</Link>
		       </li>
		       <li>
		          <Link to="/projects">Projects</Link>
		     </li>
		     <li>
		          <Link to="/contacts">Projects</Link>
		)      </li>
		      </ul>
		     </nav>

		     <Outlet />
		     </>		        
           )
         };