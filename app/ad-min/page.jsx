
"use client";

import { useState } from "react";

export default function UploadPDF() {
  const [file, setFile] = useState(null);
  const [customId, setCustomId] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadPDF = async () => {
    if (!file) return alert("Select PDF first");

    const formData = new FormData();
    formData.append("pdf", file);

    if (customId.trim()) {
      formData.append("customId", customId.trim());
    }

    try {
      setLoading(true);
      setMsg("");

      const res = await fetch("https://updated-project-backend.onrender.com/api/pdf/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const data = await res.json();
      setMsg(`✅ Uploaded successfully! Review: ${data.reviewUrl}`);
    } catch (err) {
      console.error("Upload error:", err.message);
      setMsg("❌ Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page text-black">
      <div className="card">
        <h2>📄 Upload PDF</h2>

        <label className="label ">Select PDF</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <label className="label ">Custom ID (optional)</label>
        <input
          type="text"
          placeholder="example: my-pdf-123"
          value={customId}
          onChange={(e) => setCustomId(e.target.value)}
        />

        <button onClick={uploadPDF} disabled={loading}>
          {loading ? "Uploading..." : "Upload PDF"}
        </button>

        {msg && <p className="msg">{msg}</p>}
      </div>

      {/* CS....*/}
      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 16px;
          background: linear-gradient(135deg, #eef2ff, #f8fafc);
        }

        .card {
          width: 100%;
          max-width: 420px;
          background: #fff;
          padding: 24px;
          border-radius: 14px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        h2 {
          text-align: center;
          margin-bottom: 10px;
        }

        .label {
          font-size: 14px;
          font-weight: 500;
        }

        input[type="file"],
        input[type="text"] {
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #d1d5db;
          font-size: 14px;
          width: 100%;
        }

        input:focus {
          outline: none;
          border-color: #6366f1;
        }

        button {
          margin-top: 10px;
          padding: 12px;
          border-radius: 10px;
          border: none;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          background: #6366f1;
          color: white;
          transition: 0.2s;
        }

        button:hover {
          background: #4f46e5;
        }

        button:disabled {
          background: #a5b4fc;
          cursor: not-allowed;
        }

        .msg {
          margin-top: 10px;
          font-size: 14px;
          text-align: center;
          word-break: break-all;
        }

        @media (max-width: 480px) {
          .card {
            padding: 18px;
          }
        }
      `}</style>
    </div>
  );
}
