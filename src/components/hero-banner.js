import React from "react";

export const HeroBanner = () => {
  const logo = "https://i.pinimg.com/originals/a9/0e/c5/a90ec5e3493a27f243d10fab79d00f28.png";

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo"></div>
      <h1 className="hero-banner__headline">Tail AI</h1>
      <p className="hero-banner__description">
        Tail AI is a comphrhensive AI mental health assitant powered by our custom ECG, Audio, and LLM models
      </p>
      <a
        id="code-sample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://youtube.com/shorts/cBbhlRq14iM"
        className="button button--secondary"
      >
        Check out Tail AI in action
      </a>

      {/* Add the Voiceflow script tag */}
      <script type="text/javascript">
        {`
          (function(d, t) {
            var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
            v.onload = function() {
              window.voiceflow.chat.load({
                verify: { projectID: '661ae2529f0a7cb3f08a5cc0' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production'
              });
            }
            v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
          })(document, 'script');
        `}
      </script>
    </div>
  );
};