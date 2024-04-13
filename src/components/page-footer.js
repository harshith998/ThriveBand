import React from "react";

export const PageFooter = () => {
  const logo = "src/components/thrivelogo.png"; // New logo path

  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>This sample application is brought to you by&nbsp;</span>
              <strong>Thrive Band</strong>
            </p>
            <p className="page-footer-message__description">
              <span>Your fitness experience. Your health. Your life.</span>
            </p>
          </div>
          <div className="page-footer-info__button">
            <a
              id="learn-more-button"
              className="button button--secondary"
              href="https://thriveband.vercel.app"
              target="_blank"
              rel="noreferrer noopener"
            >
              Learn More About Thrive Band
            </a>
          </div>
        </div>
        <div className="page-footer-grid__brand">
          <div className="page-footer-brand">
            <img
              className="page-footer-brand__logo"
              src={logo} // Using the new logo path
              alt="Thrive Band Logo"
              width="100"
              height="100"
            />
            <span>Thrive Band</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
