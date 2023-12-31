// CertificationForm.js
import React, { useState } from "react";

const CertificationForm = ({ getReviewers }) => {
  const [campaignId, setCampaignId] = useState("");
  const [bearerToken, setBearerToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getReviewers(campaignId, bearerToken);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="campaignId">Campaign ID:</label>
        <input
          type="text"
          id="campaignId"
          placeholder="Enter campaign ID"
          value={campaignId}
          onChange={(e) => setCampaignId(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="bearerToken">Bearer Token:</label>
        <input
          type="text"
          id="bearerToken"
          placeholder="Enter Bearer Token"
          value={bearerToken}
          onChange={(e) => setBearerToken(e.target.value)}
        />
      </div>
      <button type="submit">Get Reviewers</button>
    </form>
  );
};

export default CertificationForm;
