import ChromaGrid from "./ChromaGrid"


const items = [
  {
    image: "/nasa.png",
    title: "nasa space apps",
    subtitle: "hackathon nasa",
    handle: "@nasa space app",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://www.spaceappschallenge.org/2025/find-a-team/stem-fesc/"
  },
  {
    image: "/gstnetwork.png",
    title: "GstNetwork",
    subtitle: "desarrollador 2025-2026",
    handle: "@gstnetwork",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://gstech.com.mx"
  },
   {
    image: "logoStem.png",
    title: "Stem fesc",
    subtitle: "lider division de programacion",
    handle: "@stemfesc",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://www.spaceappschallenge.org/2025/find-a-team/stem-fesc/"
  },
  {
     image: "/Mit.png",
    title: "Mit Hacknation",
    subtitle: "hackathon mit ",
    handle: "@hacknation",
    borderColor: "#570750",
    gradient: "linear-gradient(180deg, #88074e, #000)",
    url: "https://gstech.com.mx"
  },
  {
     image: "/ICPC.png",
    title: "ICPC 2025",
    subtitle: "participante del icpc",
    handle: "@icpcglobal",
    borderColor: "#ffffff",
    gradient: "linear-gradient(180deg, #ffffff, #000)",
    url: "https://gstech.com.mx"
  },
  {
    image:"/IEEE.png",
    title: "IEEXTREME",
    subtitle: "participante IEEXTREME",
    handle: "@ieee",
    borderColor: "#f0aa12",
    gradient: "linear-gradient(145deg, #d6970e, #000)",
    url: "https://ieeextreme.org"
  }
];

function Experiencia(){
    return(
        <div className="container mx-auto bg-black/70 mt-10">
            <div className="flex justify-start">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Experiencia</h1>
            </div>
             <ChromaGrid 
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
        />

        </div>
    )
}
export default Experiencia