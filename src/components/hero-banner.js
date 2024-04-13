import React from "react";

export const HeroBanner = () => {
  const logo = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fthrive-logo-png-logo-vector-brand-downloads-svg-eps--651473902369552850%2F&psig=AOvVaw3KKQV4S9woN_yg54-3IGEX&ust=1713066434461000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDB6POjvoUDFQAAAAAdAAAAABAE";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">Thrive Band</h1>
      <p className="hero-banner__description">
      A holistic wearable for Tracking Health, Regulating Intensity, and Verifiying Enudurance (THRIVE). Our device is a wrist device containing numerous sensors, allowing for a complete workout and fitness supplement.
      </p>
      <a
        id="code-sample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://auth0.com/developers/hub/code-samples/spa/react-javascript/basic-authentication-with-react-router-6"
        className="button button--secondary"
      >
        Check out Thrive Band in action →
      </a>
    </div>
  );
};
