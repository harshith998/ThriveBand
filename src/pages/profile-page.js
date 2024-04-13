import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export const ProfilePage = () => {
  const { user } = useAuth0();

  // Generate data with a general upward trend
  const data = Array.from({ length: 30 }, (_, i) => ({
    time: i + 1,
    electrocytes: 100 + Math.floor(i * 1.5),
  }));

  if (!user) {
    return null;
  }

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          Welcome Page
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>This is where you would find personalized information.</span>
            <span>
              <strong>Below is a graph showcasing the change in your electrocyte concentration over time.</strong>
            </span>
          </p>
          <div className="profile-grid">
            <div className="profile__header">
              <img src={user.picture} alt="Profile" className="profile__avatar" />
              <div className="profile__headline">
                <h2 className="profile__title">{user.name}</h2>
                <span className="profile__description">{user.email}</span>
              </div>
            </div>
            <div className="profile__details">
              <div className="electrocyte-chart">
                <LineChart width={800} height={500} data={data}>
                  <XAxis dataKey="time" label={{ value: "Time (seconds)", position: "insideBottom", offset: 0 }} />
                  <YAxis label={{ value: "Electrocyte Concentration", angle: -90, position: "insideLeft" }} />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="electrocytes" stroke="#8884d8" />
                </LineChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};