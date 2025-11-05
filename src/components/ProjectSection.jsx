import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import{cn} from"@/lib/utils";
const projects = [
  {
    id: 1,
    title: "Bayar Air",
    description: "Aplikasi Pencatatan Air Artesis",
    image: "/projects/bayarair/bayarair1.png",
    tags: ["Laravel", "Kotlin/Gradle", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "#",
    category: "MobileApp",
  },
  {
    id: 2,
    title: "Lah-Kerja",
    description: "Sistem Manajemen sumberdaya manusia",
    image: "/projects/lahkerja/lahkerja1.png",
    tags: ["Laravel", "TailwindCSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
    category: "WebApp",
  },
  {
    id: 3,
    title: "Sistem Surat Pemberiitahuan massa (SSPM)",
    description: "Sistem Pembantu Pencatatan Pajak ",
    image: "/projects/sspm/sspm1.png",
    tags: ["Laravel", "MySQL", "Javascript"],
    demoUrl: "#",
    githubUrl: "",
    category: "WebApp",
  },

  {
    id: 4,
    title: "Automated Testing Atisisbada using selenium",
    description: "Automated Testing untuk aplikasi Atisisbada",
    image: "/projects/atisisbada/atisisbada1.png",
    tags: ["Selenium", "Python"],
    demoUrl: "#",
    githubUrl: "",
    category: "Other",
  },

  {
    id: 5,
    title: "Deteksi Objek Sederhana ",
    description: "Deteksi Objek Sederhana menggunakan Yolo dan PyTorch untuk mendeteksi dummy,korban dan saya",
    image: "/projects/AI/simpleobjectdetection.png",
    tags: ["Python","PyTorch","Ultralytics YOLO"],
    demoUrl: "#",
    githubUrl: "",
    category: "Other",
  },
];

const categories = ["all", "WebApp", "MobileApp", "Other"];

// TODO: Tambahkan fitur filter berdasarkan Personal Atau Work Project
// TODO: Buat kan Github dan demoURL nya jadi optional, kalo gaada ga usah ditampilin iconnya

export const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProject = projects.filter(
    (projects) =>
      activeCategory === "all" || projects.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the recent projects I have been working on.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProject.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-${index}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* TODO: Buat kan Github dan demoURL nya jadi optional, kalo gaada ga usah ditampilin iconnya */}
                    {/* <a 
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/SulthanAuliaRahman"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
