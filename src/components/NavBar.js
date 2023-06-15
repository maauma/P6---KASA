import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div className='bloc-logo'>
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className='menu'>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </div>
    </nav>
  );
}

export default NavBar;
