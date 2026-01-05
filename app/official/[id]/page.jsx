"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Footer from "@/app/Footer/Footer";
import Header from "@/app/Header/Header";



export default function PdfPage() {
  const { id } = useParams();
  const [pdf, setPdf] = useState(null);

  const pdfList = [

  { "id": "1", "name": "PDF One", "file": "/1.pdf" },
  { "id": "2", "name": "PDF Two", "file": "/2.pdf" },
  { "id": "3", "name": "PDF Three", "file": "/3.pdf" },
  { "id": "4", "name": "PDF Four", "file": "/4.pdf" },
  { "id": "5", "name": "PDF Five", "file": "/5.pdf" },
  { "id": "6", "name": "PDF Six", "file": "/6.pdf" },
  { "id": "7", "name": "PDF Seven", "file": "/7.pdf" },
  { "id": "8", "name": "PDF Eight", "file": "/8.pdf" },
  { "id": "9", "name": "PDF Nine", "file": "/9.pdf" },
  { "id": "10", "name": "PDF Ten", "file": "/10.pdf" },
  { "id": "11", "name": "PDF Eleven", "file": "/11.pdf" },
  { "id": "12", "name": "PDF Twelve", "file": "/12.pdf" },
  { "id": "13", "name": "PDF Thirteen", "file": "/13.pdf" },
  { "id": "14", "name": "PDF Fourteen", "file": "/14.pdf" },
  { "id": "15", "name": "PDF Fifteen", "file": "/15.pdf" },
  { "id": "16", "name": "PDF Sixteen", "file": "/16.pdf" },
  { "id": "17", "name": "PDF Seventeen", "file": "/17.pdf" },
  { "id": "18", "name": "PDF Eighteen", "file": "/18.pdf" },
  { "id": "19", "name": "PDF Nineteen", "file": "/19.pdf" },
  { "id": "20", "name": "PDF Twenty", "file": "/20.pdf" },
  { "id": "21", "name": "PDF Twenty-One", "file": "/21.pdf" },
  { "id": "22", "name": "PDF Twenty-Two", "file": "/22.pdf" },
  { "id": "23", "name": "PDF Twenty-Three", "file": "/23.pdf" },
  { "id": "24", "name": "PDF Twenty-Four", "file": "/24.pdf" },
  { "id": "25", "name": "PDF Twenty-Five", "file": "/25.pdf" },



     { id: "2Q758Z943WmK2d-YEASIN-ARAFAT-T2P-2025-BDB2B-0001346", name: "PDF Two", file: "/YEASIN-RAFAT-T2P-2025-BDB2B-0001346.pdf" },
     { id: "2Q7P8Z9WmK2ertredfsdfsdfsdtrtd-DELWdffsdfsdfAR-HOSSAIN-T2P-2025-BDB2B-0001345", name: "PDF Two", file: "/4.pdf" },
    { id: "2Q7P8Z9WmK2d-DELWAR-HOSSAIN-T2P-2025-BDB2B-0001345", name: "PDF Two", file: "/DELWAR-HOSSAIN-T2P-2025-BDB2B-0001345.pdf" },
  ];
// tttrr

  useEffect(() => {
    const selectedPdf = pdfList.find((p) => p.id === id);
    setPdf(selectedPdf);
  }, [id]);

  return (
    <>
<Header></Header>

  <div>


      {/* <li className="px-4 py-2 bg-red-600 text-white font-semibold hover:bg-red-700 transition">
  CERTIFICATE OF INSURANCE
</li> */}

    </div>
{/* 
<header className="bg-white shadow">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<h1 className="text-2xl font-bold text-blue-600">INSURANCE</h1>
<nav className="hidden md:flex gap-6 text-sm font-medium">
<a href="#" className="hover:text-blue-600">Insurance</a>
<a href="#" className="hover:text-blue-600">Plans</a>
<a href="#" className="hover:text-blue-600">About</a>

</nav>
</div>
</header> */}
  


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
          src={pdf.file}
          width="100%"
          height="600px"
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
    </>
  );
}
