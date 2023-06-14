// Commenter chaque page
import Banner from '../components/Banner.js';
import Card from '../components/Card';
import properties from '../components/data/logements.json'



function HomePage() {
  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" image="/img/banner_home.png" />

      <div className="card-list">
        {properties.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;

