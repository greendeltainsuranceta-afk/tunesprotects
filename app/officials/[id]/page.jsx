"use client";

import Footer from "@/app/Footer/Footer";
import Header from "@/app/Header/Header";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ReviewPDFs() {
  const { id } = useParams();

  const [pdf, setPdf] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const res = await fetch(
          `https://updated-project-backend.onrender.com/api/pdf/info/${id}`
        );

        if (!res.ok) {
          const text = await res.text();
          throw new Error(text);
        }

        const data = await res.json();
        setPdf(data.pdf);
      } catch (err) {
        console.error(err);
        setError("PDF load failed");
      }
    };

    loadPdf();
  }, [id]);

  if (error) {
    return (
      <div className="center">
        <p className="error">❌ {error}</p>
        <style jsx>{styles}</style>
      </div>
    );
  }

  if (!pdf) {
    return (
      <div className="center">
        <p className="loading">Loading PDF…</p>
        <style jsx>{styles}</style>
      </div>
    );
  }

  return (
    <div>

      <Header></Header>
        <div className="bg-white">
    
       
    <div className="xl:mx-[240px] lg:mx-[240px] md:mx-[50px] mx-[10px] my-[50px]">
    <div className="text-center my-[50px]">
            <h2 className="bg-[linear-gradient(45deg,#e43a6c_25%,#faa82f_70%)] bg-clip-text text-transparent text-3xl font-bold">
      OUR CERTIFICATE OF INSURANCE
    </h2>
    
          <div className="text-[#272727b4] my-4 text-[14px]">
            <p>Thank you for your purchase! Please verify your details in the Certificate of Insurance below and ensure that it is valid before your travel / cover dates.</p>
          </div>
    
    <div className="text-[#252525]">
            <h2 className="font-bold">Any discrepancy should be brought to our attention before commencement of the trip and no claims will be accepted if the policy details are incorrect after departure.</h2>
    </div>
    
    
    </div>
     <div className="xl:mx-[140px] lg:mx-[140px] mx-[8px]">
          {pdf ? (
            <iframe
              src={pdf.url}
              width="100%"
              height="600px"
                loading="lazy"
              style={{ border: "1px solid #ccc" }}
            />
          ) : (
            <p>PDF not found</p>
          )}
    </div>
    
    <div className="my-[100px]">
     <Image className="xl:w-[40%] lg:w-[40%] md:w-[40%]  w-[90%] mx-auto"
          src="https://i.ibb.co/DHDyN7qr/footer-downloadapp-with-qr.png"
          alt="Download App QR"
          width={300}       // pixel value, adjust as needed
          height={300}      // pixel value, adjust as needed
        />
    </div>
    
    
    </div>
    
    
    <div className="xl:mx-[240px] lg:mx-[240px] md:mx-[100px] mx-[10px] my-[50px] my-6 ">
    
    <h2 className="font-extrabold text-center text-[#2C2D31] text-[28px] my-6">Emergency Assistance</h2>
    
    
    
    <div className="text-black grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
    
    <div className="text-center">
       <h2 className="text-[#E4170E] font-semibold my-4 ">Middle East</h2>
    <h2 className="font-bold text-[#2c2c2c] text-[26px]">+9714 420 3920</h2>
    <p className="italic text-[9px]">(English & Arabic)
    US & Canada</p>
    </div>
    
    <div className="text-center">
       <h2 className="text-[#E4170E] font-semibold my-4">US & Canada</h2>
    <h2 className="font-bold text-[#2c2c2c] text-[21px]">+178 6472 7700</h2>
    <p className="italic text-[9px]">(English, French & Arabic)</p>
    </div>
    
    <div className="text-center">
       <h2 className="text-[#E4170E] font-semibold my-4">Europe/North Africa</h2>
    <h2 className="font-bold text-[#2c2c2c] text-[21px]">+441 786 310 605</h2>
    <p className="italic text-[9px]">(English, French & Arabic)</p>
    </div>
    
    
    <div className="text-center">
       <h2 className="text-[#E4170E] font-semibold my-4">Indian Subcontinent</h2>
    <h2 className="font-bold text-[#2c2c2c] text-[21px]">+911 244 688 488 </h2>
    <p className="italic text-[9px]">(English & Arabic)</p>
    </div>
    
    
    
    
    
    
    
    
    </div>
    
    
    
    </div>
    
    
    {/* section... */}
    
    
    
    
    <div className="xl:mx-[240px] lg:mx-[240px] md:mx-[100px] mx-[10px] my-[50px] text-[#ff0a12] grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 items-baseline">
    
      <div className="text-center">
    <div>
        <h2 className="font-semibold my-6 text-[17px]">ID for general enquiries</h2>
    </div>
    <div>
        <p className="font-extrabold xl:text-[20px] lg:text-[20px] md:text-[20px] text-[13px]">enquiry.emeia@tuneprotect.com</p>
    </div>
    </div>
    
      <div className="text-center">
    <div>
        <h2 className="font-semibold my-6 text-[17px]">For claims related enquiries</h2>
    </div>
    <div>
        <p className="font-extrabold xl:text-[20px] lg:text-[20px] md:text-[20px] text-[13px]">travelassurance@tuneprotect.com</p>
    </div>
    </div>
    
    
    
    </div>
    
    
    
    
    
     </div>
    
    
    
    <Footer></Footer>
    </div>
  );
}

/* ===============================
   STYLES
================================ */
const styles = `
.page {
  min-height: 100vh;
  padding: 16px;
  background: linear-gradient(135deg, #f1f5f9, #eef2ff);
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 100%;
  max-width: 900px;
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

h2 {
  font-size: 18px;
  text-align: center;
  word-break: break-word;
  color: #1f2937;
}

.iframeWrap {
  width: 100%;
  height: 75vh;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: #fff;
}

.center {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading {
  font-size: 16px;
  color: #4f46e5;
}

.error {
  font-size: 16px;
  color: #dc2626;
  text-align: center;
}

@media (max-width: 640px) {
  .card {
    padding: 14px;
  }

  .iframeWrap {
    height: 65vh;
  }

  h2 {
    font-size: 16px;
  }
}
`;
