import { Link } from 'react-router-dom'
import './nav.css';
function Nav() {
  return (
    <div>
        
     <div>
        <nav className='na'>
         <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>

     </nav>
     </div>
    </div>
  )
}

export default Nav