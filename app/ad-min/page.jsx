
"use client";


export default function page() {


  const uploadPDF = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);


    // const res = await fetch("/upload", {
    //   method: "POST",
    //   body: file,
    // });

    // const data = await res.json();
    // alert("Uploaded! PDF URL: " + data.url);
    //   console.log(data)
  };



  return (
    <div className="flex justify-center items-center h-dvh">
       <form onSubmit={uploadPDF} className="text-center">
<div>
        <input className="border-1 border-[#d8d8d8]" type="file" name="file" required /></div>
<div>
        <button className="bg-orange-600 px-6 cursor-pointer my-2 py-2 text-white" type="submit">Upload</button>
</div>



    </form>
    </div>
  );
}
