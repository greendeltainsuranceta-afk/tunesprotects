// "use client";

// import { useState } from "react";

// export default function ServerDashboard() {
//   const stats = [
//     { name: "CPU Usage", value: 35 },
//     { name: "RAM Usage", value: 60 },
//     { name: "Storage Usage", value: 80 },
//     { name: "PDF Storage (40 files)", value: 100 },
//   ];

//   const getColor = (value) => {
//     if (value < 50) return "bg-green-500";
//     if (value < 80) return "bg-yellow-500";
//     return "bg-red-500";
//   };



// // const plans = [
// //     {
// //       name: "Basic Server",
// //       price: 5500,
// //       features: ["40 PDF Upload", "Basic Storage", "Standard Speed"],
// //     },
// //     {
// //       name: "Pro Server",
// //       price: 10500,
// //       features: ["100 PDF Upload", "More Storage", "Fast Performance"],
// //     },
// //     {
// //       name: "Premium Server",
// //       price: 19000,
// //       features: ["500", "High Storage", "Ultra Speed"],
// //     },
// //   ];


// const plans = [
//     {
//       name: "Basic Server",
//       price: 5500,
//       features: ["40 PDF Upload", "Basic Storage", "Standard Speed"],
//     },
//     {
//       name: "Pro Server",
//       price: 10500,
//       features: ["100 PDF Upload", "More Storage", "Fast Performance"],
//     },
//     {
//       name: "Premium Server",
//       price: 15000,
//       features: ["500 PDF Upload", "High Storage", "Ultra Speed"],
//     },
//   ];

//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [trxId, setTrxId] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const handleOrder = (plan) => {
//     setSelectedPlan(plan);
//     setShowModal(true);
//   };

//   const handleConfirm = () => {
//     if (!trxId) {
//       alert("Please enter your Bikash Transaction ID!");
//       return;
//     }

//     alert(
//       `Payment successful!\nPlan: ${selectedPlan.name}\nAmount: ৳${selectedPlan.price}\nBikash Number: 01734354565\nTrx ID: ${trxId}`
//     );

//     setShowModal(false);
//     setTrxId("");
//   };


//   return (

//     <>

//     <div className="min-h-screen bg-gray-100 p-4 md:p-8">
//       <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
//         Server Resource Dashboard
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
//         {stats.map((item, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition"
//           >
//             <div className="flex justify-between mb-3">
//               <h2 className="font-semibold text-gray-700">{item.name}</h2>
//               <span className="font-bold">{item.value}%</span>
//             </div>

//             <div className="w-full bg-gray-200 rounded-full h-5">
//               <div
//                 className={`h-5 rounded-full ${getColor(item.value)} transition-all duration-500`}
//                 style={{ width: `${item.value}%` }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>   
    
    

// <div className="bg-gray-100 p-6 flex items-center justify-center min-h-screen">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">

//         {plans.map((plan, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
//           >
//             <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>

//             <p className="text-4xl font-bold text-blue-600 mb-6">
//               ৳{plan.price}
//             </p>

//             <ul className="mb-6 space-y-2 text-gray-600">
//               {plan.features.map((f, index) => (
//                 <li key={index}>✔ {f}</li>
//               ))}
//             </ul>

//             <button
//               onClick={() => handleOrder(plan)}
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
//             >
//               Order Now
//             </button>
//           </div>
//         ))}

//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-2xl p-8 max-w-md w-full">
//             <h2 className="text-2xl font-bold mb-4 text-center">Confirm Payment</h2>
//             <p className="text-gray-700 mb-4 text-center">
//               Send ৳{selectedPlan.price} to Bikash Number: <strong>01734354565</strong> and enter the Transaction ID:
//             </p>

//             <input
//               type="text"
//               placeholder="Bikash Transaction ID"
//               value={trxId}
//               onChange={(e) => setTrxId(e.target.value)}
//               className="border p-3 rounded-lg w-full mb-4"
//             />

//             <div className="flex justify-between">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleConfirm}
//                 className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>

    
// {/*     
//     <div className=" bg-gray-100 p-6 flex items-center justify-center">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">

//         {plans.map((plan, i) => (
//           <div
//             key={i}
//             className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
//           >
//             <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>

//             <p className="text-4xl font-bold text-blue-600 mb-6">
//               ৳{plan.price}
//             </p>

//             <ul className="mb-6 space-y-2 text-gray-600">
//               {plan.features.map((f, index) => (
//                 <li key={index}>✔ {f}</li>
//               ))}
//             </ul>

//             <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
//               Order Now
//             </button>
//           </div>
//         ))}

//       </div>
//     </div> */}


    

// <div className=" bg-gray-100 p-6">

//       {/* About Us */}
//       <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-10">
//         <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
//         <p className="text-gray-600 text-center">
//           We provide high performance server solutions for PDF storage,
//           fast download system and scalable hosting. Our platform supports
//           secure file uploads and reliable server upgrades for growing projects.
//         </p>
//       </section>

//       {/* Contact Section */}
//       <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
//         <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

//         <div className="grid md:grid-cols-2 gap-6">

//           <input
//             type="text"
//             placeholder="Your Name"
//             className="border p-3 rounded-lg w-full"
//           />

//           <input
//             type="email"
//             placeholder="Your Email"
//             className="border p-3 rounded-lg w-full"
//           />

//           <textarea
//             placeholder="Your Message"
//             className="border p-3 rounded-lg w-full md:col-span-2"
//             rows="4"
//           />

//         </div>

//         <div className="text-center mt-6">
//           <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
//             Send Message
//           </button>
//         </div>
//       </section>

//     </div>

    
//      </>
//   );
// }

"use client";

import { useState } from "react";

export default function ServerDashboard() {
  const stats = [
    { name: "CPU Usage", value: 99 },
    { name: "RAM Usage", value: 99 },
    { name: "Storage Usage", value: 100 },
    { name: "PDF Storage (per Limit 30 files)", value: 100 },
  ];

  const getColor = (value) => {
    if (value < 50) return "bg-green-500";
    if (value < 80) return "bg-yellow-500";
    return "bg-red-500";
  };

  const plans = [
    {
      name: "Basic Server",
      price: 8500,
      features: ["29 PDF Upload", "Basic Storage", "Standard Speed"],
    },
    {
      name: "Pro Server",
      price: 10500,
      features: ["45 PDF Upload", "More Storage", "Fast Performance"],
    },
    {
      name: "Premium Server",
      price: 11500,
      features: ["60 PDF Upload", "High Storage", "Ultra Speed"],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [trxId, setTrxId] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleOrder = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const handleConfirm = () => {
    if (!trxId) {
      alert("Please enter your Bikash Transaction ID!");
      return;
    }

    alert(
      `Payment successful!\nPlan: ${selectedPlan.name}\nAmount: ৳${selectedPlan.price}\nBikash Number: 01734354565\nTrx ID: ${trxId}`
    );

    setShowModal(false);
    setTrxId("");
  };

  return (
    <div className="bg-gradient-to-br invisible  from-blue-400 via-purple-500 to-pink-500 min-h-screen">
      
      {/* Server Dashboard */}
      <div className="p-6 md:p-8 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">
          Server Resource Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white/90 rounded-2xl shadow-lg p-5 hover:shadow-xl transition"
            >
              <div className="flex justify-between mb-3">
                <h2 className="font-semibold text-gray-700">{item.name}</h2>
                <span className="font-bold">{item.value}%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-5">
                <div
                  className={`h-5 rounded-full ${getColor(item.value)} transition-all duration-500`}
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Server Plans */}
      <div className="p-6 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-white/90 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>

              <p className="text-4xl font-bold text-blue-600 mb-6">
                ৳{plan.price}
              </p>

              <ul className="mb-6 space-y-2 text-gray-700">
                {plan.features.map((f, index) => (
                  <li key={index}>✔ {f}</li>
                ))}
              </ul>

              <button
                onClick={() => handleOrder(plan)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Confirm Payment</h2>
            <p className="text-gray-700 mb-4 text-center">
              Send ৳{selectedPlan.price} to Bikash Number: <strong>01304974350</strong> and enter the Transaction ID:
            </p>

            <input
              type="text"
              placeholder="Bikash Transaction ID"
              value={trxId}
              onChange={(e) => setTrxId(e.target.value)}
              className="border p-3 rounded-lg w-full mb-4"
            />

            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirm}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* About & Contact */}
      <div className="p-6 max-w-6xl mx-auto space-y-10">
        {/* About Us */}
        <section className="bg-white/90 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
          <p className="text-gray-700 text-center">
            We provide high performance server solutions for PDF storage,
            fast download system and scalable hosting. Our platform supports
            secure file uploads and reliable server upgrades for growing projects.
          </p>
        </section>

        {/* Contact Section */}
        <section className="bg-white/90 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded-lg w-full"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border p-3 rounded-lg w-full"
            />

            <textarea
              placeholder="Your Message"
              className="border p-3 rounded-lg w-full md:col-span-2"
              rows="4"
            />
          </div>

          <div className="text-center mt-6">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
