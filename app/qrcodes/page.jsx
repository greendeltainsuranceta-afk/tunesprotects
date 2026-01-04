"use client"; // Next.js 13+ app router

import { useState } from "react";
import QRCode from "qrcode";

export default function QRGenerator() {
  const [link, setLink] = useState("");
  const [qrSrc, setQrSrc] = useState("");

  const generateQR = async () => {
    try {
      const url = await QRCode.toDataURL(link);
      setQrSrc(url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 className="my-4 font-extrabold">Enter a Link to Generate QR Code</h2>

      <input className="border-2"
        type="text"
        value={link}
        placeholder="https://example.com"
        onChange={(e) => setLink(e.target.value)}
        style={{
          width: "80%",
          padding: "10px",
          fontSize: "16px",
        }}
      />

      <br />

      <button className="bg-red-500 text-white rounded-md my-2"
        onClick={generateQR}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Generate QR
      </button>

      {qrSrc && (
        <div style={{ marginTop: "30px" }}>
          <h3>QR Code:</h3>
          <img src={qrSrc} alt="QR Code" width="250" height="250" />
          <p>
            <a className="border-2 px-6 py-2 bg-red-500 text-black" href={qrSrc} download="qr-code.png">
              👉 Download QR Code
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
