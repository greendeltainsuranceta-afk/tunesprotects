"use client";
import { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import Image from "next/image";
import Header from "./Header/Header";

export default function Home() {
  const [pdfUrl, setPdfUrl] = useState(null);





  return (
    <>


<Header></Header>

{/* header */}




      {/* <div>


      <li className="px-4 py-2 bg-red-600 text-white font-semibold hover:bg-red-700 transition">
  CERTIFICATE OF INSURANCE
</li>

    </div> */}

  
 <div className="min-h-screen bg-gray-50 text-gray-800">
{/* Header */}
{/* <header className="bg-white shadow">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<h1 className="text-2xl font-bold text-blue-600">INSURANCE</h1>
<nav className="hidden md:flex gap-6 text-sm font-medium">
<a href="#" className="hover:text-blue-600">Insurance</a>
<a href="#" className="hover:text-blue-600">Plans</a>
<a href="#" className="hover:text-blue-600">About</a>

</nav>
</div>
</header> */}


{/* Hero Section (NO MAP) */}
<section className="bg-blue-600 text-white">
<div className="max-w-7xl mx-auto px-6 py-20 text-center">
<h2 className="text-4xl md:text-5xl font-bold mb-4">Protect What Matters Most</h2>
<p className="max-w-2xl mx-auto mb-6 text-lg">
Reliable insurance solutions for health, life, travel, and property.
</p>
<button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold shadow hover:bg-gray-100">
Get Insurance Now
</button>
</div>
</section>


{/* Insurance Services */}
<section className="max-w-7xl mx-auto px-6 py-16">
<h3 className="text-3xl font-bold text-center mb-12">Our Insurance Services</h3>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="bg-white p-6 rounded-2xl shadow">
<h4 className="font-semibold text-xl mb-2">Health Insurance</h4>
<p className="text-gray-600 text-sm">Medical coverage for individuals and families.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow">
<h4 className="font-semibold text-xl mb-2">Life Insurance</h4>
<p className="text-gray-600 text-sm">Secure your family’s financial future.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow">
<h4 className="font-semibold text-xl mb-2">Travel Insurance</h4>
<p className="text-gray-600 text-sm">Enjoy safe and worry-free travel.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow">
<h4 className="font-semibold text-xl mb-2">Property Insurance</h4>
<p className="text-gray-600 text-sm">Protect your home and valuable assets.</p>
</div>
</div>
</section>


{/* Why Choose Us */}
<section className="bg-white py-16">
<div className="max-w-4xl mx-auto px-6 text-center">
<h3 className="text-3xl font-bold mb-6">Why Choose Us</h3>
<div className="grid sm:grid-cols-2 gap-6 text-gray-600">
<p>✔ Trusted Insurance Provider</p>
<p>✔ Affordable Premium</p>
<p>✔ Fast Claim Support</p>
<p>✔ 24/7 Customer Service</p>
</div>
</div>
</section>


{/* CTA */}
<section className="bg-blue-500 text-white py-16 text-center">
<h3 className="text-3xl font-bold mb-4">Get Your Insurance Today</h3>
<p className="mb-6">Simple process, quick approval, trusted coverage.</p>
<button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-semibold shadow">
Contact Us
</button>
</section>

</div>

   

<Footer></Footer>

    </>
  );
}
