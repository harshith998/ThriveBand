import React from "react";

export const HeroBanner = () => {
  const logo = "src/components/thrivelogo.png";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="Thrive Band Logo" />
      </div>
      <h1 className="hero-banner__headline">Thrive Band</h1>
      <p className="hero-banner__description">
        A holistic wearable for Tracking Health, Regulating Intensity, and
        Verifying Endurance (THRIVE). Our device is a wrist device containing
        numerous sensors, allowing for a complete workout and fitness.
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
