import React from "react";

export const HeroBanner = () => {
  const logo = "https://i.pinimg.com/originals/a9/0e/c5/a90ec5e3493a27f243d10fab79d00f28.png";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
  
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
        href="thriveband.vercel.app"
        className="button button--secondary"
      >
        Check out Thrive Band in action →
      </a>
    </div>
  );
};
