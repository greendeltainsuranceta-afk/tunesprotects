"use client"


import React from 'react';

const page = () => {
    return (
        <div>

            <div className="wrapper">
      <div className="card">
        <div className="icon">🚫</div>

        <h1>Server Down</h1>
        <p>
          Our server is temporarily unavailable.<br />
          Please wait a moment.
        </p>

        <div className="loader"></div>
        <small>Redirecting...</small>
      </div>

      <style jsx>{`
        .wrapper {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #111827, #1f2933);
          font-family: system-ui, sans-serif;
        }

        .card {
          background: #ffffff;
          padding: 40px;
          width: 340px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          animation: fadeIn 0.4s ease;
        }

        .icon {
          font-size: 60px;
          margin-bottom: 10px;
        }

        h1 {
          color: #dc2626;
          margin: 10px 0;
        }

        p {
          color: #555;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .loader {
          width: 40px;
          height: 40px;
          border: 4px solid #e5e7eb;
          border-top: 4px solid #dc2626;
          border-radius: 50%;
          margin: 0 auto 15px;
          animation: spin 1s linear infinite;
        }

        small {
          color: #6b7280;
          font-size: 12px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
            
        </div>
    );
};

export default page;