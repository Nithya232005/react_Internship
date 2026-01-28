import { Link } from 'react-router-dom'
import './nav.css';
function Navbar() {
  return (
    <div>
        <h2>BLOGS</h2>
     <div>
        <nav className='na'>
         <Link to="/">Home</Link>
      <Link to="/Dashboard">Dashboard</Link>
      <Link to="/Contact">Contact</Link>

     </nav>
     </div>
    </div>
  )
}
export default Navbar
