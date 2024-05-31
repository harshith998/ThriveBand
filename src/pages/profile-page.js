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
            <span>This is where you would create and modify your call agents.</span>
            <span>
              <strong>For what usecase would you like to call?</strong>
            </span>
          </p>
          
     
        </div>
      </div>
    </PageLayout>
  );
};