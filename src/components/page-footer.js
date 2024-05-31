import React, { useEffect } from "react";

export const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <strong>Call AI</strong> {/* Changed to promote AI therapist */}
            </p>
            <p className="page-footer-message__description">
              <span>Your trivial calls automated.</span> {/* Updated description */}
            </p>
          </div>
          <div className="page-footer-info__button">
            <a
              id="learn-more-button"
              className="button button--secondary"
              href="https://tail-ai.vercel.app" 
              target="_blank"
              rel="noreferrer noopener"
            >
              Learn More About Call AI {/* Updated button text */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
