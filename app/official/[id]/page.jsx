"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function PdfPage() {
  const { id } = useParams();
  const [pdf, setPdf] = useState(null);

  const pdfList = [
    { id: "1", name: "PDF One", file: "/cv.pdf" },
    { id: "2", name: "PDF Two", file: "/AdmitCard_ACC_ALQJD94V.pdf" },
  ];

  useEffect(() => {
    const selectedPdf = pdfList.find((p) => p.id === id);
    setPdf(selectedPdf);
  }, [id]);

  return (
    <>
      <h3>PDF View (ID: {id})</h3>

      {pdf ? (
        <iframe
          src={pdf.file}
          width="100%"
          height="600px"
          style={{ border: "1px solid #ccc" }}
        />
      ) : (
        <p>PDF not found</p>
      )}


      
    </>
  );
}
