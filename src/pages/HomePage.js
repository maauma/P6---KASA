import Banner from '../components/Banner.js';
import Card from '../components/Card';
import properties from '../components/data/logements.json';

// Crée un composant fonctionnel HomePage
function HomePage() {
  return (
    <main>
    <div >
      {/* Affiche la bannière de la page d'accueil */}
      <div className='mobile-banner'>
      <Banner title="Chez vous, partout et ailleurs" image="/img/banner_home.png" />
      </div>

      {/* Affiche la liste des cartes de logements */}
      <div className="card-list">
        {properties.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </div>
    </main>
  );
}

// Exporte le composant HomePage pour être utilisé dans d'autres parties de l'application
export default HomePage;