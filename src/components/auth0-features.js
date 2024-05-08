import React from "react";

export const Auth0Features = () => {
  const featuresList = [
    {
      title: "Emotional Well-being Monitoring",
      description:
        "Our AI therapist utilizes advanced algorithms to monitor users' emotional well-being in real-time. By analyzing various factors such as tone of voice, facial expressions, and text input, it provides proactive support and interventions to promote mental wellness.",
    },
    {
      title: "Personalized Therapy Sessions",
      description:
        "The AI therapist offers personalized therapy sessions tailored to each user's unique needs and preferences. Through natural language processing and machine learning, it adapts its approach over time to provide effective support and guidance.",
    },
    {
      title: "24/7 Support Availability",
      description:
        "Users can access our AI therapist anytime, anywhere, ensuring continuous support and assistance whenever they need it. Whether it's day or night, the AI therapist is always there to lend a listening ear and offer helpful insights.",
    },
    {
      title: "Data-Driven Insights and Progress Tracking",
      description:
        "Our AI therapist tracks users' progress and provides data-driven insights to help them better understand their emotions and behaviors. By visualizing trends and patterns, users can gain valuable self-awareness and make positive changes in their lives.",
    },
  ];

  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">AI Therapist Features</h2>
      <div className="auth0-features__grid">
        {featuresList.map((feature, index) => (
          <div key={index} className="auth0-feature">
            <h3 className="auth0-feature__title">{feature.title}</h3>
            <p className="auth0-feature__description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
