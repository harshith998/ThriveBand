import React, { useEffect } from "react";

export const PageFooter = () => {
  useEffect(() => {
    // Load the AI Therapist widget
    (function (d, t) {
      var v = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      v.onload = function () {
        window.aiTherapist.chat.load({
          verify: { projectID: "661ae2529f0a7cb3f08a5cc0" }, // Replace with your AI therapist project ID
          url: "https://general-runtime.voiceflow.com",
          versionID: "production",
        });
      };
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      v.type = "text/javascript";
      s.parentNode.insertBefore(v, s);
    })(document, "script");
  }, []);

  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>This application is powered by&nbsp;</span>
              <strong>AI Therapist</strong> {/* Changed to promote AI therapist */}
            </p>
            <p className="page-footer-message__description">
              <span>Your mental health companion for a balanced life.</span> {/* Updated description */}
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
              Learn More About AI Therapist {/* Updated button text */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
