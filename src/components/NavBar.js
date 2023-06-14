import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <div>
        <img src="/logo.png" alt="Logo" />
      </div>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </div>
    </nav>
  );
}

export default NavBar;
