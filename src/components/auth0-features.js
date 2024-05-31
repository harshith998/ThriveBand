import React from "react";
import "./Auth0Features.css"; // Import CSS file for styling

export const Auth0Features = () => {
  const featuresList = [
    {
      title: "Automated Task Completion",
      description:
        "Our AI outbound assistant can make calls to complete tasks ranging from trivial calls to internet service providers or license plate registration to complex insurance claim verification and adjudication for healthcare clinics.",
    },
    {
      title: "24/7 Availability",
      description:
        "Users can rely on our AI outbound assistant anytime, anywhere, ensuring continuous support and assistance whenever they need it. Whether it's day or night, the AI assistant is always ready to make calls and complete tasks efficiently.",
    },
    {
      title: "Data-Driven Efficiency",
      description:
        "Our AI outbound assistant tracks tasks and provides data-driven insights to optimize its performance. By analyzing call outcomes and user feedback, it continuously improves its efficiency and accuracy in completing tasks.",
    },
    {
      title: "User-Friendly Interface",
      description:
        "The AI outbound assistant features a user-friendly interface that simplifies task management and interaction. With intuitive controls and clear feedback, users can easily navigate and utilize its capabilities.",
    },
  ];

  return (
    <div className="ai-outbound-assistant">
      <h2 className="ai-outbound-assistant__title">AI Outbound Assistant Features</h2>
      <div className="ai-outbound-assistant__grid">
        {featuresList.map((feature, index) => (
          <div key={index} className="ai-outbound-assistant__block">
            <h3 className="ai-outbound-assistant__block-title">{feature.title}</h3>
            <p className="ai-outbound-assistant__block-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
