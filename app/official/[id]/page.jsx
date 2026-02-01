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
    file: "/iders/2Q758Z943WmK2d-MD-ADNAN-HABIB-ANSARI-T2P-2025-BDB2B-0001377.pdf"
  },
  {
    id: "2Q758Z943WmK2d-ABDUR-RAHMAN-T2P-2025-BDB2B-0001379",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-ABDUR-RAHMAN-T2P-2025-BDB2B-0001379",
    file: "/iders/2Q758Z943WmK2d-ABDUR-RAHMAN-T2P-2025-BDB2B-0001379.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MIJANUR-RAHMAN-SUMON-T2P-2025-BDB2B-0001380",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MIJANUR-RAHMAN-SUMON-T2P-2025-BDB2B-0001380",
    file: "/iders/2Q758Z943WmK2d-MIJANUR-RAHMAN-SUMON-T2P-2025-BDB2B-0001380.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MAHIUR-RAHMAN-MARJAN-T2P-2025-BDB2B-0001381",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MAHIUR-RAHMAN-MARJAN-T2P-2025-BDB2B-0001381",
    file: "/iders/2Q758Z943WmK2d-MAHIUR-RAHMAN-MARJAN-T2P-2025-BDB2B-0001381.pdf"
  },
  {
    id: "2Q758Z943WmK2d-SUMON-AHMED-T2P-2025-BDB2B-0001382",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-SUMON-AHMED-T2P-2025-BDB2B-0001382",
    file: "/iders/2Q758Z943WmK2d-SUMON-AHMED-T2P-2025-BDB2B-0001382.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-HIMEL-SAYEED-T2P-2025-BDB2B-0001383",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-HIMEL-SAYEED-T2P-2025-BDB2B-0001383",
    file: "/iders/2Q758Z943WmK2d-MD-HIMEL-SAYEED-T2P-2025-BDB2B-0001383.pdf"
  },
  {
    id: "2Q758Z943WmK2d-GOLAM-RABBI-T2P-2025-BDB2B-0001384",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-GOLAM-RABBI-T2P-2025-BDB2B-0001384",
    file: "/iders/2Q758Z943WmK2d-GOLAM-RABBI-T2P-2025-BDB2B-0001384.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-SOHEBUR-MIAH-T2P-2025-BDB2B-0001385",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-SOHEBUR-MIAH-T2P-2025-BDB2B-0001385",
    file: "/iders/2Q758Z943WmK2d-MD-SOHEBUR-MIAH-T2P-2025-BDB2B-0001385.pdf"
  },
  {
    id: "2Q758Z943WmK2d-RAIHAN-MIAH-T2P-2025-BDB2B-0001386",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-RAIHAN-MIAH-T2P-2025-BDB2B-0001386",
    file: "/iders/2Q758Z943WmK2d-RAIHAN-MIAH-T2P-2025-BDB2B-0001386.pdf"
  },
  {
    id: "2Q758Z943WmK2d-AKTHER-HUSEN-RAHI-T2P-2025-BDB2B-0001387",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-AKTHER-HUSEN-RAHI-T2P-2025-BDB2B-0001387",
    file: "/iders/2Q758Z943WmK2d-AKTHER-HUSEN-RAHI-T2P-2025-BDB2B-0001387.pdf"
  },
  {
    id: "2Q758Z943WmK2d-ANAMUL-HAQUE-T2P-2025-BDB2B-0001388",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-ANAMUL-HAQUE-T2P-2025-BDB2B-0001388",
    file: "/iders/2Q758Z943WmK2d-ANAMUL-HAQUE-T2P-2025-BDB2B-0001388.pdf"
  },
  {
    id: "2Q758Z943WmK2d-SAYED-MOKHIT-AHMED-T2P-2025-BDB2B-0001389",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-SAYED-MOKHIT-AHMED-T2P-2025-BDB2B-0001389",
    file: "/iders/2Q758Z943WmK2d-SAYED-MOKHIT-AHMED-T2P-2025-BDB2B-0001389.pdf"
  },
  {
    id: "2Q758Z943WmK2d-JASIM-UDDIN-T2P-2025-BDB2B-0001390",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-JASIM-UDDIN-T2P-2025-BDB2B-0001390",
    file: "/iders/2Q758Z943WmK2d-JASIM-UDDIN-T2P-2025-BDB2B-0001390.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-AJHARUL-ISLAM-ALO-T2P-2025-BDB2B-0001391",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-AJHARUL-ISLAM-ALO-T2P-2025-BDB2B-0001391",
    file: "/iders/2Q758Z943WmK2d-MD-AJHARUL-ISLAM-ALO-T2P-2025-BDB2B-0001391.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MARJAN-AHMED-T2P-2025-BDB2B-0001392",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MARJAN-AHMED-T2P-2025-BDB2B-0001392",
    file: "/iders/2Q758Z943WmK2d-MARJAN-AHMED-T2P-2025-BDB2B-0001392.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MOHAMMAD-MOIJUDDIN-T2P-2025-BDB2B-0001393",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MOHAMMAD-MOIJUDDIN-T2P-2025-BDB2B-0001393",
    file: "/iders/2Q758Z943WmK2d-MOHAMMAD-MOIJUDDIN-T2P-2025-BDB2B-0001393.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-FARHAD-HOSSAIN-T2P-2025-BDB2B-0001394",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-FARHAD-HOSSAIN-T2P-2025-BDB2B-0001394",
    file: "/iders/2Q758Z943WmK2d-MD-FARHAD-HOSSAIN-T2P-2025-BDB2B-0001394.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-MUFASSIR-KHAN-SALMAN-T2P-2025-BDB2B-0001395",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-MUFASSIR-KHAN-SALMAN-T2P-2025-BDB2B-0001395",
    file: "/iders/2Q758Z943WmK2d-MD-MUFASSIR-KHAN-SALMAN-T2P-2025-BDB2B-0001395.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MOHAMMED-LELIN-T2P-2025-BDB2B-0001396",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MOHAMMED-LELIN-T2P-2025-BDB2B-0001396",
    file: "/iders/2Q758Z943WmK2d-MOHAMMED-LELIN-T2P-2025-BDB2B-0001396.pdf"
  },
  {
    id: "2Q758Z943WmK2d-NAEEM-AHMOD-T2P-2025-BDB2B-0001397",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-NAEEM-AHMOD-T2P-2025-BDB2B-0001397",
    file: "/iders/2Q758Z943WmK2d-NAEEM-AHMOD-T2P-2025-BDB2B-0001397.pdf"
  },
  {
    id: "2Q758Z943WmK2d-FAHIM-AHMAD-T2P-2025-BDB2B-0001398",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-FAHIM-AHMAD-T2P-2025-BDB2B-0001398",
    file: "/iders/2Q758Z943WmK2d-FAHIM-AHMAD-T2P-2025-BDB2B-0001398.pdf"
  },
  {
    id: "2Q758Z943WmK2d-PAVEL-AHMED-T2P-2025-BDB2B-0001399",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-PAVEL-AHMED-T2P-2025-BDB2B-0001399",
    file: "/iders/2Q758Z943WmK2d-PAVEL-AHMED-T2P-2025-BDB2B-0001399.pdf"
  },
  {
    id: "2Q758Z943WmK2d-URID-HASAN-DIHAN-T2P-2025-BDB2B-0001400",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-URID-HASAN-DIHAN-T2P-2025-BDB2B-0001400",
    file: "/iders/2Q758Z943WmK2d-URID-HASAN-DIHAN-T2P-2025-BDB2B-0001400.pdf"
  },
  {
    id: "2Q758Z943WmK2d-ELAIS-MIAH-T2P-2025-BDB2B-0001401",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-ELAIS-MIAH-T2P-2025-BDB2B-0001401",
    file: "/iders/2Q758Z943WmK2d-ELAIS-MIAH-T2P-2025-BDB2B-0001401.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-ABDUL-KAIYUM-T2P-2025-BDB2B-0001402",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-ABDUL-KAIYUM-T2P-2025-BDB2B-0001402",
    file: "/iders/2Q758Z943WmK2d-MD-ABDUL-KAIYUM-T2P-2025-BDB2B-0001402.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MOJAMMEL-HOSSAIN-T2P-2025-BDB2B-0001403",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MOJAMMEL-HOSSAIN-T2P-2025-BDB2B-0001403",
    file: "/iders/2Q758Z943WmK2d-MOJAMMEL-HOSSAIN-T2P-2025-BDB2B-0001403.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-JOHIRUL-ISLAM-KHAN-SUHAG-T2P-2025-BDB2B-0001404",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-JOHIRUL-ISLAM-KHAN-SUHAG-T2P-2025-BDB2B-0001404",
    file: "/iders/2Q758Z943WmK2d-MD-JOHIRUL-ISLAM-KHAN-SUHAG-T2P-2025-BDB2B-0001404.pdf"
  },
  {
    id: "2Q758Z943WmK2d-JOBAYER-AHMED-T2P-2025-BDB2B-0001405",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-JOBAYER-AHMED-T2P-2025-BDB2B-0001405",
    file: "/iders/2Q758Z943WmK2d-JOBAYER-AHMED-T2P-2025-BDB2B-0001405.pdf"
  },
  {
    id: "2Q758Z943WmK2d-MD-MAHBUB-HASAN-T2P-2025-BDB2B-0001406",
    url: "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-MAHBUB-HASAN-T2P-2025-BDB2B-0001406",
    file: "/iders/2Q758Z943WmK2d-MD-MAHBUB-HASAN-T2P-2025-BDB2B-0001406.pdf"
  },




  


  {
    "id": "2Q758Z943WmK2d-MD-ADNAN-HABIB-ANSARI-T2P-2025-BDB2B-0001377",
    "url": "https://tunesprotect.com/official/2Q758Z943WmK2d-MD-ADNAN-HABIB-ANSARI-T2P-2025-BDB2B-0001377",
    "file": "/iders/MD-ADNAN-HABIB-ANSARI-T2P-2025-BDB2B-0001377.pdf"
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
  }


  


];

// bb.......
  

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
