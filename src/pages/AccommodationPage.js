import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Slideshow';
import data from '../components/data/logements.json';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';

const AccommodationPage = () => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const foundAccommodation = data.find((item) => item.id === id);
    if (foundAccommodation) {
      setAccommodation(foundAccommodation);
      setError(false);
    } else {
      setError(true);
    }
  }, [id]);

  if (!accommodation && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Le bien est introuvable...</div>;
  }

  return (
    <div className='logement accommodation-page'>
      <div className='carrousel'>
        <Carousel images={accommodation.pictures} />
      </div>
      <div className='bloc-infos'>
        <div className='description1'>
          <div className='bloc1'>
            <h1>{accommodation.title}</h1>
            <p className='location'>{accommodation.location}</p>
            <ul className="tag-list">
              {accommodation.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className='bloc2'>
            <div className='hote'>
              <p>{accommodation.host.name}</p>
              <img src={accommodation.host.picture} alt={accommodation.host.name} />
            </div>
            <Rating rating={accommodation.rating} />
          </div>
        </div>
      </div>
      <div className='bloc3'>
        <Collapse className="accommodation-accordeon" title="Description">
          <div className='open_collapse'>
            <p>{accommodation.description}</p>
          </div>
        </Collapse>

        <Collapse className="accommodation-accordeon" title={"Equipements"}>
          <div className='open_collapse'>
            <ul className="list-items">
              {accommodation.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default AccommodationPage;
