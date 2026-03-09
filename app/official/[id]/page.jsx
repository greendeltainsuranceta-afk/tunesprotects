"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Footer from "@/app/Footer/Footer";
import Header from "@/app/Header/Header";


// ..
export default function PdfPage() {
  const {id} = useParams();
  const [pdf, setPdf] = useState(null);

const pdfList = [
  {
    id: "2Q758Z943WmK2d-ADE-MAHMUD-NAYEM-T2P-2025-BDB2B-0001362",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-ADE-MAHMUD-NAYEM-T2P-2025-BDB2B-0001362",
    file: "/ADEL-MAHMUD-NAYEM-T2P-2025-BDB2B-0001362-1.pdf"
  },
  {
    id: "2Q758Z943WmK2d-AL-MUJAHID-ASHIK-T2P-2025-BDB2B-0001359",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-AL-MUJAHID-ASHIK-T2P-2025-BDB2B-0001359",
    file: "/AL-MUJAHID-ASHIK-T2P-2025-BDB2B-0001359-2.pdf"
  },
  {
    id: "2Q758Z943WmK2d-DELWAR-HOSSAIN-T2P-2025-BDB2B-0001345",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-DELWAR-HOSSAIN-T2P-2025-BDB2B-0001345",
    file: "/DELWAR-HOSSAIN-T2P-2025-BDB2B-0001345-3.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MASUD-T2P-2025-BDB2B-0001356",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MASUD-T2P-2025-BDB2B-0001356",
    file: "/MASUD-T2P-2025-BDB2B-0001356-4.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-AL-AMIN-MUNSHI-T2P-2025-BDB2B-0001363",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-AL-AMIN-MUNSHI-T2P-2025-BDB2B-0001363",
    file: "/MD-AL-AMIN-MUNSHI-T2P-2025-BDB2B-0001363-5.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-EMDADUL-HOQUE-BHUIYAN-T2P-2025-BDB2B-0001349",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-EMDADUL-HOQUE-BHUIYAN-T2P-2025-BDB2B-0001349",
    file: "/MD-EMDADUL-HOQUE-BHUIYAN-T2P-2025-BDB2B-0001349-6.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-IBRAHIM-KHALIL-T2P-2025-BDB2B-0001364",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-IBRAHIM-KHALIL-T2P-2025-BDB2B-0001364",
    file: "/MD-IBRAHIM-KHALIL-T2P-2025-BDB2B-0001364-7.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-JAMIL-BHUIYAN-T2P-2025-BDB2B-0001353",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-JAMIL-BHUIYAN-T2P-2025-BDB2B-0001353",
    file: "/MD-JAMIL-BHUIYAN-T2P-2025-BDB2B-0001353-8.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-MAIDUL-ISLAM-T2P-2025-BDB2B-0001352",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-MAIDUL-ISLAM-T2P-2025-BDB2B-0001352",
    file: "/MD-MAIDUL-ISLAM-T2P-2025-BDB2B-0001352-9.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-MOFIJUL-ISLAM-T2P-2025-BDB2B-0001351",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-MOFIJUL-ISLAM-T2P-2025-BDB2B-0001351",
    file: "/MD-MOFIJUL-ISLAM-T2P-2025-BDB2B-0001351-10.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-SAIDUL-ALAM-T2P-2025-BDB2B-0001360",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-SAIDUL-ALAM-T2P-2025-BDB2B-0001360",
    file: "/MD-SAIDUL-ALAM-T2P-2025-BDB2B-0001360-11.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-TANVIR-AHMED-T2P-2025-BDB2B-0001357",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-TANVIR-AHMED-T2P-2025-BDB2B-0001357",
    file: "/MD-TANVIR-AHMED-T2P-2025-BDB2B-0001357-12.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MOHAMMAD-AZIZUR-RAHMAN-T2P-2025-BDB2B-0001348",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MOHAMMAD-AZIZUR-RAHMAN-T2P-2025-BDB2B-0001348",
    file: "/MOHAMMAD-AZIZUR-RAHMAN-T2P-2025-BDB2B-0001348-13.pdf"
  },
  {
    id: "2Q758Z943WmK2d-NAZIMUL-ISLAM-T2P-2025-BDB2B-0001358",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-NAZIMUL-ISLAM-T2P-2025-BDB2B-0001358",
    file: "/NAZIMUL-ISLAM-T2P-2025-BDB2B-0001358-14.pdf"
  },
  {
    id: "2Q758Z943WmK2d-SHAKIL-HOSSAN-T2P-2025-BDB2B-0001354",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-SHAKIL-HOSSAN-T2P-2025-BDB2B-0001354",
    file: "/SHAKIL-HOSSAN-T2P-2025-BDB2B-0001354-15.pdf"
  },
  {
    id: "2Q758Z943WmK2d-SHOINUL-ABEDIN-T2P-2025-BDB2B-0001361",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-SHOINUL-ABEDIN-T2P-2025-BDB2B-0001361",
    file: "/SHOINUL-ABEDIN-T2P-2025-BDB2B-0001361-16.pdf"
  },


  {
    id: "2Q758Z943WmK2d-TASKYD-BIN-AYUB-T2P-2025-BDB2B-0001355",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-TASKYD-BIN-AYUB-T2P-2025-BDB2B-0001355",
    file: "/TASKYD-BIN-AYUB-T2P-2025-BDB2B-0001355-17.pdf"
  },

  
  {
    id: "2Q758Z943WmK2d-UMME-HABIBA-ALAM-KHAN-T2P-2025-BDB2B-0001347",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-UMME-HABIBA-ALAM-KHAN-T2P-2025-BDB2B-0001347",
    file: "/UMME-HABIBA-ALAM-KHAN-T2P-2025-BDB2B-0001347-18.pdf"
  },
  {
    id: "2Q758Z943WmK2d-YEASIN-ARAFAT-T2P-2025-BDB2B-0001346",
    url: "http://tunesprotect.com/official/2Q758Z943WmK2d-YEASIN-ARAFAT-T2P-2025-BDB2B-0001346",
    file: "/YEASIN-ARAFAT-T2P-2025-BDB2B-0001346-19.pdf"
  },
  {
    id: "2Q758Z943WmK2d-ZIAUR-RAHMAN-CHOWDHURY-T2P-2025-BDB2B-0001350",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-ZIAUR-RAHMAN-CHOWDHURY-T2P-2025-BDB2B-0001350",
    file: "/ZIAUR-RAHMAN-CHOWDHURY-T2P-2025-BDB2B-0001350-20.pdf"
  },

  {
    id: "2Q758Z943WmK2d-JAVED-AHMED-T2P-2025-BDB2B-0001365",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-JAVED-AHMED-T2P-2025-BDB2B-0001365",
    file: "/JAVED-AHMED-T2P-2025-BDB2B-0001365-900.pdf"
  },



  // .....t

  {
    id: "2Q758Z943WmK2d-AHSUN-HABIB-T2P-2025-BDB2B-0001374",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-AHSUN-HABIB-T2P-2025-BDB2B-0001374",
    file: "/iders/AHSUN-HABIB-T2P-2025-BDB2B-0001374-1.pdf"
  },

    {
    id: "2Q758Z943WmK2d-HAMZA-KHAN-SHUVO-T2P-2025-BDB2B-0001368",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-HAMZA-KHAN-SHUVO-T2P-2025-BDB2B-0001368",
    file: "/iders/HAMZA-KHAN-SHUVO-T2P-2025-BDB2B-0001368-2.pdf"
  },
  {
    id: "2Q758Z943WmK2d-HRIDOY-CHANDRA-BISWAS-T2P-2025-BDB2B-0001367",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-HRIDOY-CHANDRA-BISWAS-T2P-2025-BDB2B-0001367",
    file: "/iders/HRIDOY-CHANDRA-BISWAS-T2P-2025-BDB2B-0001367-3.pdf"
  },

  {
    id: "2Q758Z943WmK2d-MD-JAKIR-HOSSEN-T2P-2025-BDB2B-0001370",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-JAKIR-HOSSEN-T2P-2025-BDB2B-0001370",
    file: "/iders/MD.-JAKIR-HOSSEN-T2P-2025-BDB2B-0001370-4.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD.-LUTFUR-RAHMAN-T2P-2025-BDB2B-0001375",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-JAVED-AHMED-T2P-2025-BDB2B-0001365",
    file: "/iders/MD.-LUTFUR-RAHMAN-T2P-2025-BDB2B-0001375-5.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-IBRAHIM-KHALIL-T2P-2025-BDB2B-0001372",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-IBRAHIM-KHALIL-T2P-2025-BDB2B-0001372",
    file: "/iders/MD-IBRAHIM-KHALIL-T2P-2025-BDB2B-0001372-6.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-RUHUL-AMIN-EMON-T2P-2025-BDB2B-0001373",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-JAVED-AHMED-T2P-2025-BDB2B-0001365",
    file: "/iders/MD-RUHUL-AMIN-EMON-T2P-2025-BDB2B-0001373-7.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-SAKLINE-MOSTAK-T2P-2025-BDB2B-0001371",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-JAVED-AHMED-T2P-2025-BDB2B-0001365",
    file: "/iders/MD-SAKLINE-MOSTAK-T2P-2025-BDB2B-0001371-8.pdf"
  },
  {
    id: "2Q758Z943WmK2d-SABBIR-BISWAS-T2P-2025-BDB2B-0001369",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-JAVED-AHMED-T2P-2025-BDB2B-0001365",
    file: "/iders/SABBIR-BISWAS-T2P-2025-BDB2B-0001369-9.pdf"
  },
  {
    id: "2Q758Z943WmK2d-SAGAR-DAS-T2P-2025-BDB2B-0001377",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-SAGAR-DAS-T2P-2025-BDB2B-0001377",
    file: "/iders/SAGAR-DAS-T2P-2025-BDB2B-0001366-10.pdf"
  },
  {
    id: "2Q758Z943WmK2d-SUJAN-KUMAR-SHARMA-T2P-2025-BDB2B-0001376",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-JAVED-AHMED-T2P-2025-BDB2B-0001365",
    file: "/iders/SUJAN-KUMAR-SHARMA-T2P-2025-BDB2B-0001376-11.pdf"
  },

 {
    id: "2Q758Z943WmK2d-MD-ADNAN-HABIB-ANSARI-T2P-2025-BDB2B-0001377",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-ADNAN-HABIB-ANSARI-T2P-2025-BDB2B-0001377",
    file: "/iders/MD-ADNAN-HABIB-ANSARI-T2P-2025-BDB2B-00013776.pdf"
  },








  


  {
    id: "2Q758Z943WmK2d-MD-ADNAN-HABIB-ANSARI-T2P-2025-BDB2B-0001377",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-ADNAN-HABIB-ANSARI-T2P-2025-BDB2B-0001377",
    file: "/iders/MD-ADNAN-HABIB-ANSARI-T2P-2025-BDB2B-0001377.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-ABDUR-RAHMAN-T2P-2025-BDB2B-0001379",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-ABDUR-RAHMAN-T2P-2025-BDB2B-0001379",
    "file": "/iders/ABDUR-RAHMAN-T2P-2025-BDB2B-0001379.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MIJANUR-RAHMAN-SUMON-T2P-2025-BDB2B-0001380",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MIJANUR-RAHMAN-SUMON-T2P-2025-BDB2B-0001380",
    "file": "/iders/MIJANUR-RAHMAN-SUMON-T2P-2025-BDB2B-0001380.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MAHIUR-RAHMAN-MARJAN-T2P-2025-BDB2B-0001381",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MAHIUR-RAHMAN-MARJAN-T2P-2025-BDB2B-0001381",
    "file": "/iders/MAHIUR-RAHMAN-MARJAN-T2P-2025-BDB2B-0001381.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-SUMON-AHMED-T2P-2025-BDB2B-0001382",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-SUMON-AHMED-T2P-2025-BDB2B-0001382",
    "file": "/iders/SUMON-AHMED-T2P-2025-BDB2B-0001382.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-HIMEL-SAYEED-T2P-2025-BDB2B-0001383",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-HIMEL-SAYEED-T2P-2025-BDB2B-0001383",
    "file": "/iders/MD-HIMEL-SAYEED-T2P-2025-BDB2B-0001383.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-GOLAM-RABBI-T2P-2025-BDB2B-0001384",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-GOLAM-RABBI-T2P-2025-BDB2B-0001384",
    "file": "/iders/GOLAM-RABBI-T2P-2025-BDB2B-0001384.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-SOHEBUR-MIAH-T2P-2025-BDB2B-0001385",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-SOHEBUR-MIAH-T2P-2025-BDB2B-0001385",
    "file": "/iders/MD-SOHEBUR-MIAH-T2P-2025-BDB2B-0001385.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-RAIHAN-MIAH-T2P-2025-BDB2B-0001386",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-RAIHAN-MIAH-T2P-2025-BDB2B-0001386",
    "file": "/iders/RAIHAN-MIAH-T2P-2025-BDB2B-0001386.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-AKTHER-HUSEN-RAHI-T2P-2025-BDB2B-0001387",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-AKTHER-HUSEN-RAHI-T2P-2025-BDB2B-0001387",
    "file": "/iders/AKTHER-HUSEN-RAHI-T2P-2025-BDB2B-0001387.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-ANAMUL-HAQUE-T2P-2025-BDB2B-0001388",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-ANAMUL-HAQUE-T2P-2025-BDB2B-0001388",
    "file": "/iders/ANAMUL-HAQUE-T2P-2025-BDB2B-0001388.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-SAYED-MOKHIT-AHMED-T2P-2025-BDB2B-0001389",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-SAYED-MOKHIT-AHMED-T2P-2025-BDB2B-0001389",
    "file": "/iders/SAYED-MOKHIT-AHMED-T2P-2025-BDB2B-0001389.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-JASIM-UDDIN-T2P-2025-BDB2B-0001390",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-JASIM-UDDIN-T2P-2025-BDB2B-0001390",
    "file": "/iders/JASIM-UDDIN-T2P-2025-BDB2B-0001390.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-AJHARUL-ISLAM-ALO-T2P-2025-BDB2B-0001391",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-AJHARUL-ISLAM-ALO-T2P-2025-BDB2B-0001391",
    "file": "/iders/MD-AJHARUL-ISLAM-ALO-T2P-2025-BDB2B-0001391.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MARJAN-AHMED-T2P-2025-BDB2B-0001392",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MARJAN-AHMED-T2P-2025-BDB2B-0001392",
    "file": "/iders/MARJAN-AHMED-T2P-2025-BDB2B-0001392.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MOHAMMAD-MOIJUDDIN-T2P-2025-BDB2B-0001393",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MOHAMMAD-MOIJUDDIN-T2P-2025-BDB2B-0001393",
    "file": "/iders/MOHAMMAD-MOIJUDDIN-T2P-2025-BDB2B-0001393.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-FARHAD-HOSSAIN-T2P-2025-BDB2B-0001394",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-FARHAD-HOSSAIN-T2P-2025-BDB2B-0001394",
    "file": "/iders/MD-FARHAD-HOSSAIN-T2P-2025-BDB2B-0001394.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-MUFASSIR-KHAN-SALMAN-T2P-2025-BDB2B-0001395",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-MUFASSIR-KHAN-SALMAN-T2P-2025-BDB2B-0001395",
    "file": "/iders/MD-MUFASSIR-KHAN-SALMAN-T2P-2025-BDB2B-0001395.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MOHAMMED-LELIN-T2P-2025-BDB2B-0001396",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MOHAMMED-LELIN-T2P-2025-BDB2B-0001396",
    "file": "/iders/MOHAMMED-LELIN-T2P-2025-BDB2B-0001396.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-NAEEM-AHMOD-T2P-2025-BDB2B-0001397",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-NAEEM-AHMOD-T2P-2025-BDB2B-0001397",
    "file": "/iders/NAEEM-AHMOD-T2P-2025-BDB2B-0001397.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-FAHIM-AHMAD-T2P-2025-BDB2B-0001398",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-FAHIM-AHMAD-T2P-2025-BDB2B-0001398",
    "file": "/iders/FAHIM-AHMAD-T2P-2025-BDB2B-0001398.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-PAVEL-AHMED-T2P-2025-BDB2B-0001399",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-PAVEL-AHMED-T2P-2025-BDB2B-0001399",
    "file": "/iders/PAVEL-AHMED-T2P-2025-BDB2B-0001399.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-URID-HASAN-DIHAN-T2P-2025-BDB2B-0001400",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-URID-HASAN-DIHAN-T2P-2025-BDB2B-0001400",
    "file": "/iders/URID-HASAN-DIHAN-T2P-2025-BDB2B-0001400.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-ELAIS-MIAH-T2P-2025-BDB2B-0001401",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-ELAIS-MIAH-T2P-2025-BDB2B-0001401",
    "file": "/iders/ELAIS-MIAH-T2P-2025-BDB2B-0001401.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-ABDUL-KAIYUM-T2P-2025-BDB2B-0001402",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-ABDUL-KAIYUM-T2P-2025-BDB2B-0001402",
    "file": "/iders/MD-ABDUL-KAIYUM-T2P-2025-BDB2B-0001402.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MOJAMMEL-HOSSAIN-T2P-2025-BDB2B-0001403",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MOJAMMEL-HOSSAIN-T2P-2025-BDB2B-0001403",
    "file": "/iders/MOJAMMEL-HOSSAIN-T2P-2025-BDB2B-0001403.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-JOHIRUL-ISLAM-KHAN-SUHAG-T2P-2025-BDB2B-0001404",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-JOHIRUL-ISLAM-KHAN-SUHAG-T2P-2025-BDB2B-0001404",
    "file": "/iders/MD-JOHIRUL-ISLAM-KHAN-SUHAG-T2P-2025-BDB2B-0001404.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-JOBAYER-AHMED-T2P-2025-BDB2B-0001405",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-JOBAYER-AHMED-T2P-2025-BDB2B-0001405",
    "file": "/iders/JOBAYER-AHMED-T2P-2025-BDB2B-0001405.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-MAHBUB-HASAN-T2P-2025-BDB2B-0001406",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-MAHBUB-HASAN-T2P-2025-BDB2B-0001406",
    "file": "/iders/MD-MAHBUB-HASAN-T2P-2025-BDB2B-0001406.pdf"
  },

  


    {
    "id": "2Q758Z943WmK2d-SALIM-AHMED-T2P-2025-BDB2B-0001378",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-MAHBUB-HASAN-T2P-2025-BDB2B-0001406",
    "file": "/iders/SALIM-AHMED-T2P-2025-BDB2B-0001378.pdf"
  },

{
    "id": "2Q758Z943WmK2d-MD.-JAYEDUR-RAHMAN-JOY-T2P-2025-BDB2B-0001408",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD.-JAYEDUR-RAHMAN-JOY-T2P-2025-BDB2B-0001408",
    "file": "/iders/MD.-JAYEDUR-RAHMAN-JOY-T2P-2025-BDB2B-0001408.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-JIAUR-RAHMAN-T2P-2025-BDB2B-0001407",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-JIAUR-RAHMAN-T2P-2025-BDB2B-0001407",
    "file": "/iders/MD-JIAUR-RAHMAN-T2P-2025-BDB2B-0001407.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-SHOUL-AHMED-T2P-2025-BDB2B-0001409",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-SHOUL-AHMED-T2P-2025-BDB2B-0001409",
    "file": "/iders/SHOUL-AHMED-T2P-2025-BDB2B-0001409.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-ALI-AHMED-NAZRUL-T2P-2025-BDB2B-0001410",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-ALI-AHMED-NAZRUL-T2P-2025-BDB2B-0001410",
    "file": "/iders/ALI-AHMED-NAZRUL-T2P-2025-BDB2B-0001410.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-YASIN-ARAFAT-T2P-2025-BDB2B-0001411",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-YASIN-ARAFAT-T2P-2025-BDB2B-0001411",
    "file": "/iders/YASIN-ARAFAT-T2P-2025-BDB2B-0001411.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MOHAMMAD-NURUL-ISLAM-T2P-2025-BDB2B-0001412",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MOHAMMAD-NURUL-ISLAM-T2P-2025-BDB2B-0001412",
    "file": "/iders/MOHAMMAD-NURUL-ISLAM-T2P-2025-BDB2B-0001412.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MUZIBUR-RAHMAN-T2P-2025-BDB2B-0001413",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MUZIBUR-RAHMAN-T2P-2025-BDB2B-0001413",
    "file": "/iders/MUZIBUR-RAHMAN-T2P-2025-BDB2B-0001413.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-REDOY-ISLAM-JOY-T2P-2025-BDB2B-0001414",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-REDOY-ISLAM-JOY-T2P-2025-BDB2B-0001414",
    "file": "/iders/REDOY-ISLAM-JOY-T2P-2025-BDB2B-0001414.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MOHAMMAD-MASUD-HUSSAIN-KHAN-T2P-2025-BDB2B-0001415",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MOHAMMAD-MASUD-HUSSAIN-KHAN-T2P-2025-BDB2B-0001415",
    "file": "/iders/MOHAMMAD-MASUD-HUSSAIN-KHAN-T2P-2025-BDB2B-0001415.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-RAJU-AHMED-T2P-2025-BDB2B-0001416",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-RAJU-AHMED-T2P-2025-BDB2B-0001416",
    "file": "/iders/RAJU-AHMED-T2P-2025-BDB2B-0001416.pdf"
  },


  // ........
// 03



{ "id": "2Q758Z943WmK2d-ABDULLAH-MAMUN-JUBAYER-T2P-2025-BDB2B-0001424", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-ABDULLAH-MAMUN-JUBAYER-T2P-2025-BDB2B-0001424", "file": "/iderstwo/ABDULLAH-MAMUN-JUBAYER-T2P-2025-BDB2B-0001424.pdf" },
  { "id": "2Q758Z943WmK2d-ABDUR-RAHMAN-T2P-2025-BDB2B-0001423", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-ABDUR-RAHMAN-T2P-2025-BDB2B-0001423", "file": "/iderstwo/ABDUR-RAHMAN-T2P-2025-BDB2B-0001423.pdf" },
  { "id": "2Q758Z943WmK2d-ABDUR-RAHMAN-T2P-2025-BDB2B-0001423-1", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-ABDUR-RAHMAN-T2P-2025-BDB2B-0001423-1", "file": "/iderstwo/ABDUR-RAHMAN-T2P-2025-BDB2B-0001423-1.pdf" },
  { "id": "2Q758Z943WmK2d-ABDUR-RAZZAQ-T2P-2025-BDB2B-0001436", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-ABDUR-RAZZAQ-T2P-2025-BDB2B-0001436", "file": "/iderstwo/ABDUR-RAZZAQ-T2P-2025-BDB2B-0001436.pdf" },
  { "id": "2Q758Z943WmK2d-AKASH-HOSSAIN-T2P-2025-BDB2B-0001439", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-AKASH-HOSSAIN-T2P-2025-BDB2B-0001439", "file": "/iderstwo/AKASH-HOSSAIN-T2P-2025-BDB2B-0001439.pdf" },
  { "id": "2Q758Z943WmK2d-ASHRAFUL-IMTIAZ-PONIR-T2P-2025-BDB2B-0001430", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-ASHRAFUL-IMTIAZ-PONIR-T2P-2025-BDB2B-0001430", "file": "/iderstwo/ASHRAFUL-IMTIAZ-PONIR-T2P-2025-BDB2B-0001430.pdf" },
  { "id": "2Q758Z943WmK2d-HALAL-AHMED-T2P-2025-BDB2B-0001429", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-HALAL-AHMED-T2P-2025-BDB2B-0001429", "file": "/iderstwo/HALAL-AHMED-T2P-2025-BDB2B-0001429.pdf" },
  { "id": "2Q758Z943WmK2d-IBRAHIM-KHLIL-T2P-2025-BDB2B-0001431", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-IBRAHIM-KHLIL-T2P-2025-BDB2B-0001431", "file": "/iderstwo/IBRAHIM-KHLIL-T2P-2025-BDB2B-0001431.pdf" },
  { "id": "2Q758Z943WmK2d-MAMUN-MIAH-T2P-2025-BDB2B-0001425", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MAMUN-MIAH-T2P-2025-BDB2B-0001425", "file": "/iderstwo/MAMUN-MIAH-T2P-2025-BDB2B-0001425.pdf" },
  { "id": "2Q758Z943WmK2d-MD.-MAHFUZ-ALI-MAKHON-T2P-2025-BDB2B-0001421", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD.-MAHFUZ-ALI-MAKHON-T2P-2025-BDB2B-0001421", "file": "/iderstwo/MD.-MAHFUZ-ALI-MAKHON-T2P-2025-BDB2B-0001421.pdf" },
  { "id": "2Q758Z943WmK2d-MD-AMINUL-ISLAM-T2P-2025-BDB2B-0001438", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-AMINUL-ISLAM-T2P-2025-BDB2B-0001438", "file": "/iderstwo/MD-AMINUL-ISLAM-T2P-2025-BDB2B-0001438.pdf" },
  { "id": "2Q758Z943WmK2d-MD-ANISUR-RAHMAN-T2P-2025-BDB2B-0001440", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-ANISUR-RAHMAN-T2P-2025-BDB2B-0001440", "file": "/iderstwo/MD-ANISUR-RAHMAN-T2P-2025-BDB2B-0001440.pdf" },
  { "id": "2Q758Z943WmK2d-MD-ASRAFUL-ALAM-SEAM-T2P-2025-BDB2B-0001433", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-ASRAFUL-ALAM-SEAM-T2P-2025-BDB2B-0001433", "file": "/iderstwo/MD-ASRAFUL-ALAM-SEAM-T2P-2025-BDB2B-0001433.pdf" },
  { "id": "2Q758Z943WmK2d-MD-ASRAFUL-ALAM-SEAM-T2P-2025-BDB2B-0001433-1", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-ASRAFUL-ALAM-SEAM-T2P-2025-BDB2B-0001433-1", "file": "/iderstwo/MD-ASRAFUL-ALAM-SEAM-T2P-2025-BDB2B-0001433-1.pdf" },
  { "id": "2Q758Z943WmK2d-MD-FERDOUS-BISWAS-T2P-2025-BDB2B-0001419", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-FERDOUS-BISWAS-T2P-2025-BDB2B-0001419", "file": "/iderstwo/MD-FERDOUS-BISWAS-T2P-2025-BDB2B-0001419.pdf" },
  { "id": "2Q758Z943WmK2d-MD-FERDOUS-BISWAS-T2P-2025-BDB2B-0001419-1", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-FERDOUS-BISWAS-T2P-2025-BDB2B-0001419-1", "file": "/iderstwo/MD-FERDOUS-BISWAS-T2P-2025-BDB2B-0001419-1.pdf" },
  { "id": "2Q758Z943WmK2d-MD-RAIHAN-MIA-T2P-2025-BDB2B-0001428", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-RAIHAN-MIA-T2P-2025-BDB2B-0001428", "file": "/iderstwo/MD-RAIHAN-MIA-T2P-2025-BDB2B-0001428.pdf" },
  { "id": "2Q758Z943WmK2d-MD-SHAMSUL-ALAM-T2P-2025-BDB2B-0001427", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-SHAMSUL-ALAM-T2P-2025-BDB2B-0001427", "file": "/iderstwo/MD-SHAMSUL-ALAM-T2P-2025-BDB2B-0001427.pdf" },
  { "id": "2Q758Z943WmK2d-MD-SHOHAIB-AHMAD-T2P-2025-BDB2B-0001432", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-SHOHAIB-AHMAD-T2P-2025-BDB2B-0001432", "file": "/iderstwo/MD-SHOHAIB-AHMAD-T2P-2025-BDB2B-0001432.pdf" },
  { "id": "2Q758Z943WmK2d-MD-SUHAG-MIAH-T2P-2025-BDB2B-0001420", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-SUHAG-MIAH-T2P-2025-BDB2B-0001420", "file": "/iderstwo/MD-SUHAG-MIAH-T2P-2025-BDB2B-0001420.pdf" },
  { "id": "2Q758Z943WmK2d-MD-SUHAG-MIAH-T2P-2025-BDB2B-0001420-1", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-SUHAG-MIAH-T2P-2025-BDB2B-0001420-1", "file": "/iderstwo/MD-SUHAG-MIAH-T2P-2025-BDB2B-0001420-1.pdf" },
  { "id": "2Q758Z943WmK2d-MOHAMMAD-EASIN-T2P-2025-BDB2B-0001418", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MOHAMMAD-EASIN-T2P-2025-BDB2B-0001418", "file": "/iderstwo/MOHAMMAD-EASIN-T2P-2025-BDB2B-0001418.pdf" },
  { "id": "2Q758Z943WmK2d-MOHAMMAD-EASIN-T2P-2025-BDB2B-0001418-1", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MOHAMMAD-EASIN-T2P-2025-BDB2B-0001418-1", "file": "/iderstwo/MOHAMMAD-EASIN-T2P-2025-BDB2B-0001418-1.pdf" },
  { "id": "2Q758Z943WmK2d-MOHAMMAD-HABIBUR-RAHMAN-T2P-2025-BDB2B-0001434", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MOHAMMAD-HABIBUR-RAHMAN-T2P-2025-BDB2B-0001434", "file": "/iderstwo/MOHAMMAD-HABIBUR-RAHMAN-T2P-2025-BDB2B-0001434.pdf" },
  { "id": "2Q758Z943WmK2d-MOHAMMED-RAYHAN-T2P-2025-BDB2B-0001426", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MOHAMMED-RAYHAN-T2P-2025-BDB2B-0001426", "file": "/iderstwo/MOHAMMED-RAYHAN-T2P-2025-BDB2B-0001426.pdf" },
  { "id": "2Q758Z943WmK2d-MRINAL-KANTI-DEB-NATH-T2P-2025-BDB2B-0001417", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MRINAL-KANTI-DEB-NATH-T2P-2025-BDB2B-0001417", "file": "/iderstwo/MRINAL-KANTI-DEB NATH-T2P-2025-BDB2B-0001417.pdf" },
  { "id": "2Q758Z943WmK2d-RABBI-DEWAN-T2P-2025-BDB2B-0001437", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-RABBI-DEWAN-T2P-2025-BDB2B-0001437", "file": "/iderstwo/RABBI-DEWAN-T2P-2025-BDB2B-0001437.pdf" },
  { "id": "2Q758Z943WmK2d-RISAT-HOSSAIN-T2P-2025-BDB2B-0001435", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-RISAT-HOSSAIN-T2P-2025-BDB2B-0001435", "file": "/iderstwo/RISAT-HOSSAIN-T2P-2025-BDB2B-0001435.pdf" },
  { "id": "2Q758Z943WmK2d-SHAH-AHSAN-AHMED-T2P-2025-BDB2B-0001422", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-SHAH-AHSAN-AHMED-T2P-2025-BDB2B-0001422", "file": "/iderstwo/SHAH-AHSAN-AHMED-T2P-2025-BDB2B-0001422.pdf" },


{ "id": "2Q758Z943WmK2d-NARUTTAM-DEB-T2P-2025-BDB2B-0001445", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-NARUTTAM-DEB-T2P-2025-BDB2B-0001445", "file": "/iderstwo/NARUTTAM-DEB-T2P-2025-BDB2B-0001445.pdf" },
  { "id": "2Q758Z943WmK2d-SHARIF-UDDIN-T2P-2025-BDB2B-0001444", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-SHARIF-UDDIN-T2P-2025-BDB2B-0001444", "file": "/iderstwo/SHARIF-UDDIN-T2P-2025-BDB2B-0001444.pdf" },
  { "id": "2Q758Z943WmK2d-CHOWDHURY-TAHSAN-RAHMAN-ZIDAN-T2P-2025-BDB2B-0001443", "url": "https://tunesprotect.com/official/CHOWDHURY-TAHSAN-RAHMAN-ZIDAN-T2P-2025-BDB2B-0001443", "file": "/iderstwo/CHOWDHURY-TAHSAN-RAHMAN-ZIDAN-T2P-2025-BDB2B-0001443.pdf" },
  { "id": "2Q758Z943WmK2d-MD-SUZON-T2P-2025-BDB2B-0001442", "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-SUZON-T2P-2025-BDB2B-0001442", "file": "/iderstwo/MD-SUZON-T2P-2025-BDB2B-0001442.pdf" },
 { "id": "2Q758Z943WmK2d-BIPLOB-SARKAR-T2P-2025-BDB2B-0001441", "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-BIPLOB-SARKAR-T2P-2025-BDB2B-0001441", "file": "/iderstwo/BIPLOB-SARKAR-T2P-2025-BDB2B-0001441.pdf" },


// .........start-05...



  {
    "id": "2Q758Z943WmK2d-MD-ALAUR-RAHMAN-MAJED-T2P-2025-BDB2B-0001446",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MD-ALAUR-RAHMAN-MAJED-T2P-2025-BDB2B-0001446",
    "file": "/idersthree/MD-ALAUR-RAHMAN-MAJED-T2P-2025-BDB2B-0001446.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-SHEIKH-BORHAN-T2P-2025-BDB2B-0001447",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-SHEIKH-BORHAN-T2P-2025-BDB2B-0001447",
    "file": "/idersthree/SHEIKH-BORHAN-T2P-2025-BDB2B-0001447.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-BIPLOB-HOSSAIN-DIPU-T2P-2025-BDB2B-0001448",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-BIPLOB-HOSSAIN-DIPU-T2P-2025-BDB2B-0001448",
    "file": "/idersthree/BIPLOB-HOSSAIN-DIPU-T2P-2025-BDB2B-0001448.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-ARHAM-HOQUE-SHAMIM-T2P-2025-BDB2B-0001449",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-ARHAM-HOQUE-SHAMIM-T2P-2025-BDB2B-0001449",
    "file": "/idersthree/ARHAM-HOQUE-SHAMIM-T2P-2025-BDB2B-0001449.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MILON-KHAN-T2P-2025-BDB2B-0001450",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MILON-KHAN-T2P-2025-BDB2B-0001450",
    "file": "/idersthree/MILON-KHAN-T2P-2025-BDB2B-0001450.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-NAYEM-DEWAN-T2P-2025-BDB2B-0001451",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-NAYEM-DEWAN-T2P-2025-BDB2B-0001451",
    "file": "/idersthree/NAYEM-DEWAN-T2P-2025-BDB2B-0001451.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MOHAMMAD-ALI-SAKIB-T2P-2025-BDB2B-0001452",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MOHAMMAD-ALI-SAKIB-T2P-2025-BDB2B-0001452",
    "file": "/idersthree/MOHAMMAD-ALI-SAKIB-T2P-2025-BDB2B-0001452.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MOBARAK-HOSEN-T2P-2025-BDB2B-0001453",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MOBARAK-HOSEN-T2P-2025-BDB2B-0001453",
    "file": "/idersthree/MOBARAK-HOSEN-T2P-2025-BDB2B-0001453.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-RAJIB-HOSSAIN-T2P-2025-BDB2B-0001454",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MD-RAJIB-HOSSAIN-T2P-2025-BDB2B-0001454",
    "file": "/idersthree/MD-RAJIB-HOSSAIN-T2P-2025-BDB2B-0001454.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD.-TAMIM-HOSEN-BHUIYAN-T2P-2025-BDB2B-0001455",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MD.-TAMIM-HOSEN-BHUIYAN-T2P-2025-BDB2B-0001455",
    "file": "/idersthree/MD.-TAMIM-HOSEN-BHUIYAN-T2P-2025-BDB2B-0001455.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-IMRAN-TALUKDER-T2P-2025-BDB2B-0001456",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-IMRAN-TALUKDER-T2P-2025-BDB2B-0001456",
    "file": "/idersthree/IMRAN-TALUKDER-T2P-2025-BDB2B-0001456.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-SORIFUL-ISLAM-T2P-2025-BDB2B-0001457",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-SORIFUL-ISLAM-T2P-2025-BDB2B-0001457",
    "file": "/idersthree/SORIFUL-ISLAM-T2P-2025-BDB2B-0001457.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-SHAMIM-AHMED-T2P-2025-BDB2B-0001458",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-SHAMIM-AHMED-T2P-2025-BDB2B-0001458",
    "file": "/idersthree/SHAMIM-AHMED-T2P-2025-BDB2B-0001458.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-EHCHANUL-HABIB-TANJIM-T2P-2025-BDB2B-0001459",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-EHCHANUL-HABIB-TANJIM-T2P-2025-BDB2B-0001459",
    "file": "/idersthree/EHCHANUL-HABIB-TANJIM-T2P-2025-BDB2B-0001459.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-JAKIR-AHMED-MOYNUL-T2P-2025-BDB2B-0001460",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-JAKIR-AHMED-MOYNUL-T2P-2025-BDB2B-0001460",
    "file": "/idersthree/JAKIR-AHMED-MOYNUL-T2P-2025-BDB2B-0001460.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-FORID-MIA-T2P-2025-BDB2B-0001461",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-FORID-MIA-T2P-2025-BDB2B-0001461",
    "file": "/idersthree/FORID-MIA-T2P-2025-BDB2B-0001461.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-AMIR-HOSEN-T2P-2025-BDB2B-0001462",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-AMIR-HOSEN-T2P-2025-BDB2B-0001462",
    "file": "/idersthree/AMIR-HOSEN-T2P-2025-BDB2B-0001462.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-RABIUL-HASAN-T2P-2025-BDB2B-0001463",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-RABIUL-HASAN-T2P-2025-BDB2B-0001463",
    "file": "/idersthree/RABIUL-HASAN-T2P-2025-BDB2B-0001463.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MOHAMMAD-FAYSAL-MAHMUD-T2P-2025-BDB2B-0001464",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MOHAMMAD-FAYSAL-MAHMUD-T2P-2025-BDB2B-0001464",
    "file": "/idersthree/MOHAMMAD-FAYSAL-MAHMUD-T2P-2025-BDB2B-0001464.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-TANJIM-AHMAD-RUHAN-T2P-2025-BDB2B-0001465",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-TANJIM-AHMAD-RUHAN-T2P-2025-BDB2B-0001465",
    "file": "/idersthree/TANJIM-AHMAD-RUHAN-T2P-2025-BDB2B-0001465.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-JUNED-AHMED-T2P-2025-BDB2B-0001466",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MD-JUNED-AHMED-T2P-2025-BDB2B-0001466",
    "file": "/idersthree/MD-JUNED-AHMED-T2P-2025-BDB2B-0001466.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-AL-AMIN-T2P-2025-BDB2B-0001467",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MD-AL-AMIN-T2P-2025-BDB2B-0001467",
    "file": "/idersthree/MD-AL-AMIN-T2P-2025-BDB2B-0001467.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-JABED-AHMED-T2P-2025-BDB2B-0001468",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-JABED-AHMED-T2P-2025-BDB2B-0001468",
    "file": "/idersthree/JABED-AHMED-T2P-2025-BDB2B-0001468.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MIZANUR-RAHMAN-T2P-2025-BDB2B-0001469",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MIZANUR-RAHMAN-T2P-2025-BDB2B-0001469",
    "file": "/idersthree/MIZANUR-RAHMAN-T2P-2025-BDB2B-0001469.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MAHMUDUL-HASAN-CHOWDHURY-T2P-2025-BDB2B-0001470",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MAHMUDUL-HASAN-CHOWDHURY-T2P-2025-BDB2B-0001470",
    "file": "/idersthree/MAHMUDUL-HASAN-CHOWDHURY-T2P-2025-BDB2B-0001470.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-SYED-JABER-AHMED-T2P-2025-BDB2B-0001471",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-SYED-JABER-AHMED-T2P-2025-BDB2B-0001471",
    "file": "/idersthree/SYED-JABER-AHMED-T2P-2025-BDB2B-0001471.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-ZAHIDUL-ISLAM-T2P-2025-BDB2B-0001472",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-ZAHIDUL-ISLAM-T2P-2025-BDB2B-0001472",
    "file": "/idersthree/ZAHIDUL-ISLAM-T2P-2025-BDB2B-0001472.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-MOSHIUR-RAHMAN-T2P-2025-BDB2B-0001473",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MD-MOSHIUR-RAHMAN-T2P-2025-BDB2B-0001473",
    "file": "/idersthree/MD-MOSHIUR-RAHMAN-T2P-2025-BDB2B-0001473.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-AKRAM-HOSSAIN-T2P-2025-BDB2B-0001474",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MD-AKRAM-HOSSAIN-T2P-2025-BDB2B-0001474",
    "file": "/idersthree/MD-AKRAM-HOSSAIN-T2P-2025-BDB2B-0001474.pdf"
  },


// 09/03/2026



  {
    "id": "2Q758Z943WmK2d-MD-SHAMIM-AHMED-T2P-2025-BDB2B-0001475",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MD-SHAMIM-AHMED-T2P-2025-BDB2B-0001475",
    "file": "/idersfour/MD-SHAMIM-AHMED-T2P-2025-BDB2B-0001475.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-RINKU-BEGUM-T2P-2025-BDB2B-0001476",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-RINKU-BEGUM-T2P-2025-BDB2B-0001476",
    "file": "/idersfour/RINKU-BEGUM-T2P-2025-BDB2B-0001476.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-BABUL-MIA-T2P-2025-BDB2B-0001477",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MD-BABUL-MIA-T2P-2025-BDB2B-0001477",
    "file": "/idersfour/MD-BABUL-MIA-T2P-2025-BDB2B-0001477.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-RUBEL-AHMED-T2P-2025-BDB2B-0001478",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MD-RUBEL-AHMED-T2P-2025-BDB2B-0001478",
    "file": "/idersfour/MD-RUBEL-AHMED-T2P-2025-BDB2B-0001478.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MUKTADIR-HUSSAIN-T2P-2025-BDB2B-0001479",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MUKTADIR-HUSSAIN-T2P-2025-BDB2B-0001479",
    "file": "/idersfour/MUKTADIR-HUSSAIN-T2P-2025-BDB2B-0001479.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-ARIFUL-ISLAM-T2P-2025-BDB2B-0001480",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-ARIFUL-ISLAM-T2P-2025-BDB2B-0001480",
    "file": "/idersfour/ARIFUL-ISLAM-T2P-2025-BDB2B-0001480.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-UZZAL-HUSSAIN-TALUKDER-T2P-2025-BDB2B-0001481",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-UZZAL-HUSSAIN-TALUKDER-T2P-2025-BDB2B-0001481",
    "file": "/idersfour/UZZAL-HUSSAIN-TALUKDER-T2P-2025-BDB2B-0001481.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MOSTAFIZUR-RAHMAN-T2P-2025-BDB2B-0001482",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MOSTAFIZUR-RAHMAN-T2P-2025-BDB2B-0001482",
    "file": "/idersfour/MOSTAFIZUR-RAHMAN-T2P-2025-BDB2B-0001482.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MONABBIR-AHMED-T2P-2025-BDB2B-0001483",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MONABBIR-AHMED-T2P-2025-BDB2B-0001483",
    "file": "/idersfour/MONABBIR-AHMED-T2P-2025-BDB2B-0001483.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-MONUAR-HUSSIN-T2P-2025-BDB2B-0001484",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MD-MONUAR-HUSSIN-T2P-2025-BDB2B-0001484",
    "file": "/idersfour/MD-MONUAR-HUSSIN-T2P-2025-BDB2B-0001484.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-SACHHA-GOMES-T2P-2025-BDB2B-0001485",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-SACHHA-GOMES-T2P-2025-BDB2B-0001485",
    "file": "/idersfour/SACHHA-GOMES-T2P-2025-BDB2B-0001485.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-STANLY-GOMES-T2P-2025-BDB2B-0001486",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-STANLY-GOMES-T2P-2025-BDB2B-0001486",
    "file": "/idersfour/STANLY-GOMES-T2P-2025-BDB2B-0001486.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-PRITOM-MARTIN-PEREIRA-T2P-2025-BDB2B-0001487",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-PRITOM-MARTIN-PEREIRA-T2P-2025-BDB2B-0001487",
    "file": "/idersfour/PRITOM-MARTIN-PEREIRA-T2P-2025-BDB2B-0001487.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-RAJU-CHANNDRA-SHEEL-T2P-2025-BDB2B-0001488",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-RAJU-CHANNDRA-SHEEL-T2P-2025-BDB2B-0001488",
    "file": "/idersfour/RAJU-CHANNDRA-SHEEL-T2P-2025-BDB2B-0001488.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-AZAD-T2P-2025-BDB2B-0001489",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MD-AZAD-T2P-2025-BDB2B-0001489",
    "file": "/idersfour/MD-AZAD-T2P-2025-BDB2B-0001489.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-ANOWAR-HOSSAIN-T2P-2025-BDB2B-0001490",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MD-ANOWAR-HOSSAIN-T2P-2025-BDB2B-0001490",
    "file": "/idersfour/MD-ANOWAR-HOSSAIN-T2P-2025-BDB2B-0001490.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-MOMIN-T2P-2025-BDB2B-0001491",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MD-MOMIN-T2P-2025-BDB2B-0001491",
    "file": "/idersfour/MD-MOMIN-T2P-2025-BDB2B-0001491.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MD-RASEL-KHAN-T2P-2025-BDB2B-0001492",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MD-RASEL-KHAN-T2P-2025-BDB2B-0001492",
    "file": "/idersfour/MD-RASEL-KHAN-T2P-2025-BDB2B-0001492.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MOHAMMAD-AL-AMIN-T2P-2025-BDB2B-0001493",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MOHAMMAD-AL-AMIN-T2P-2025-BDB2B-0001493",
    "file": "/idersfour/MOHAMMAD-AL-AMIN-T2P-2025-BDB2B-0001493.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-MOHAMMAD-NOMAN-SARDER-T2P-2025-BDB2B-0001494",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-MOHAMMAD-NOMAN-SARDER-T2P-2025-BDB2B-0001494",
    "file": "/idersfour/MOHAMMAD-NOMAN-SARDER-T2P-2025-BDB2B-0001494.pdf"
  },
  {
    "id": "2Q758Z943WmK2d-SAYEAD-MD-ZOBAYER-T2P-2025-BDB2B-0001495",
    "url": "https://www.tunesprotect.com/official/2Q758Z943WmK2d-SAYEAD-MD-ZOBAYER-T2P-2025-BDB2B-0001495",
    "file": "/idersfour/SAYEAD-MD-ZOBAYER-T2P-2025-BDB2B-0001495.pdf"
  }



];

// bb.....
  

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
