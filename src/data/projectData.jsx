export const projects = [
  {
    id: 1,
    title: "Bayar Air",
    shortDescription: "Artesian Water Recording Application",
    longDescription:
      "An artesian water usage recording application that makes it easier for residents and administrators to monitor and pay bills digitally.",
    imageThumbnail: "/projects/bayarair/bayarair1.png",
    imageGallery: [
      "/projects/bayarair/bayarair1.png",
      "/projects/bayarair/web.png",
    ],
    tags: ["Laravel", "Kotlin/Gradle", "Bootstrap"],
    appUrl: "https://bayarair.progantara.com",
    category: "MobileApp",
  },
  {
    id: 2,
    title: "Lah-Kerja",
    shortDescription: "Human Resource Management System",
    longDescription:
      "A web-based HR management platform that includes attendance, payroll, leave management, and employee performance reports.",
    imageThumbnail: "/projects/lahkerja/lahkerja1.png",
    imageGallery: ["/projects/lahkerja/lahkerja1.png"],
    tags: ["Laravel", "TailwindCSS", "Javascript"],
    appUrl: "https://lahkerja-dev.progantara.com/",
    category: "WebApp",
  },
  {
    id: 3,
    title: "Sistem Surat Pemberitahuan Massa (SSPM)",
    shortDescription: "Tax Recording Assistance System",
    longDescription:
      "The Periodic Tax Return System is a system that helps in calculating taxes, monitoring work, and financial reporting.",
    imageThumbnail: "/projects/sspm/sspm1.png",
    imageGallery: ["/projects/sspm/sspm1.png"],
    tags: ["Laravel", "MySQL", "Javascript"],
    appUrl: "https://www.progantara.com/#projects",
    category: "WebApp",
  },
  {
    id: 4,
    title: "Automated Testing Atisisbada",
    shortDescription: "Automated Testing for Atisisbada Application",
    longDescription:
      "An automated testing project using Selenium to verify the functionality of the Atisisbada web application.",
    imageThumbnail: "/projects/atisisbada/atisisbada1.png",
    imageGallery: ["/projects/atisisbada/atisisbada1.png"],
    tags: ["Selenium", "Python"],
    appUrl: null,
    category: "Other",
  },
  {
    id: 5,
    title: "Deteksi Objek Sederhana",
    shortDescription:
      "Object detection using YOLO and PyTorch to detect dummies, victims, and humans",
    longDescription:
      "A computer vision robotics project that utilizes a YOLO-based PyTorch model to detect multiple object classes in real-time, including mannequins, simulated victims, and humans.",
    imageThumbnail: "/projects/AI/simpleobjectdetection.png",
    imageGallery: ["/projects/AI/simpleobjectdetection.png"],
    tags: ["Python", "PyTorch", "Ultralytics YOLO"],
    appUrl: null,
    category: "Other",
  },
  {
    id: 6,
    title: "Datahub Profiling Komdigi",
    shortDescription:
      "Data portal for postal, telecommunications, and broadcasting providers in Indonesia",
    longDescription:
      "This web-based information system presents administrative data, compliance records, provider data, and financial data. This system contains information about postal, telecommunications, and broadcasting providers in Indonesia under KOMDIGI.",
    imageThumbnail: "projects/profilingkomdigi/profiling.png",
    imageGallery: ["projects/profilingkomdigi/profiling.png"],
    tags: ["Laravel API", "React", "RESTful API"],
    appUrl: "https://datahub.komdigi.go.id/",
    category: "WebApp",
  },
  {
    id: 7,
    title: "Atisisbada Content Management System",
    shortDescription: "Content Management for Atisisbada Software",
    longDescription:
      "A Content Management System built to manage landing page content and public information of the Atisisbada Application. Allows non-technical teams to update content independently through an intuitive interface.",
    imageThumbnail: "public/projects/atisisbadaCMS/Home.png",
    imageGallery: [
      "public/projects/atisisbadaCMS/Home.png",
      "public/projects/atisisbadaCMS/Instagram.png",
    ],
    tags: ["Next.js", "React"],
    appUrl: "https://dev-atis-landingpage.atisisbada.id/",
    category: "WebApp",
  },
];

export const categories = ["all", "WebApp", "MobileApp", "Other"];