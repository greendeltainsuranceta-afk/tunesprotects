
"use client";


export default function page() {
  const uploadPDF = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/upload", {
      method: "POST",
      body: file,
    });

    const data = await res.json();
    alert("Uploaded! PDF URL: " + data.url);
      console.log(data)
  };



  return (
    <div>
      <h1>Upload PDF</h1>
      <input type="file" accept="application/pdf" onChange={uploadPDF} />
    </div>
  );
}
