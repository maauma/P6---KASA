function Banner({ title, image }) {
  const bannerStyle = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  };

  return (
      <div className="banner" style={bannerStyle}>
          <h1 className="banner-title">{title}</h1>
      </div>
  );
}

export default Banner;
