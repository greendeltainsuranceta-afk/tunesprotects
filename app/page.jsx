"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [pdfUrl, setPdfUrl] = useState(null);

  const pdfList = [
    { id: 1, name: "PDF One", file: "/cv.pdf" },
    { id: 2, name: "PDF Two", file: "/AdmitCard_ACC_ALQJD94V.pdf" },
  ];

  // ✅ page load হতেই প্রথম PDF দেখাবে
  useEffect(() => {
    setPdfUrl(pdfList[0]); // object set
  }, []);

  return (
    <>
      <h3>Select PDF</h3>

      {pdfUrl && (
        <div className="mx-[440px]">

          <iframe
          src={pdfUrl.file}
          width="100%"
          height="600px"
          style={{ border: "1px solid #ccc", marginTop: "15px" }}
        />
        </div>
      )}
    </>
  );
}
