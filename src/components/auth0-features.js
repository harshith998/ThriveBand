import React from "react";

export const Auth0Features = () => {
  const featuresList = [
    {
      title: "Automatic Cramp Predictive Intelligence",
      description:
        "Our device incorporates a predictive intelligence system that analyzes sweat to predictively warn users about potential muscle cramps. This feature helps users prevent cramps during workouts, enhancing their overall performance and experience.",
    },
    {
      title: "Pace Guidance System",
      description:
        "Thrive Band is equipped with a pace guidance system that helps runners maintain their optimal pace during workouts. Using advanced algorithms, the device calculates the user's optimal pace and provides real-time feedback via vibration, ensuring they stay on track and avoid fatigue.",
    },
    {
      title: "Complete Workout Solution",
      description:
        "Thrive Band serves as a comprehensive workout solution, allowing users to perform progressive overload exercises and prevent muscle cramps. With numerous built-in sensors, the device offers valuable insights and feedback to enhance users' fitness routines and overall well-being.",
    },
  ];

  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">Thrive Band Features</h2>
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
