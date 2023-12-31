// App.js
import React, { useState } from "react";
import CertificationForm from "./CertificationForm";
import ReviewersList from "./ReviewersList";

const apiUrl = "https://therealreal.com/api.identitynow.com/v3/identity-certifications/";

const App = () => {
  const [reviewers, setReviewers] = useState([]);

  const getReviewers = async (campaignId, bearerToken) => {
    try {
      const url = `${apiUrl}${campaignId}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch reviewers");
      }

      const data = await response.json();
      setReviewers(data.reviewers);
    } catch (error) {
      console.error("Error fetching reviewers:", error.message);
      alert(
        "Error fetching reviewers. Please check your network and try again."
      );
    }
  };

  return (
    <div className="App">
      <h1 className="heading">Get Certification Reviewers</h1>
      <CertificationForm getReviewers={getReviewers} />
      <ReviewersList reviewers={reviewers} />
    </div>
  );
};

export default App;
