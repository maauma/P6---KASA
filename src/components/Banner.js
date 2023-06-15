import React from 'react';

function Banner({ title, image, page }) {
    const bannerStyle = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  
    let bannerClassName = 'banner';
    if (page === 'home') {
      bannerClassName += ' banner-home';
    } else if (page === 'about') {
      bannerClassName += ' banner-about banner-about-mobile';
    } else if (page === 'contact') {
      bannerClassName += ' banner-contact';
    }
  
    return (
      <div className={bannerClassName} style={bannerStyle}>
        <h1 className="banner-title">{title}</h1>
      </div>
    );
  }
  
  export default Banner;
  
