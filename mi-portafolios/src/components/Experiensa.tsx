import ChromaGrid from "./ChromaGrid"

const items = [
  {
    image: "../public/nasa.png",
    title: "nasa space apps",
    subtitle: "hackathon nasa",
    handle: "@nasa space app",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://www.spaceappschallenge.org/2025/find-a-team/stem-fesc/"
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  }
];

function Experiencia(){
    return(
        <div className="container mx-auto bg-black/70 mt-10">
            <div className="flex justify-start">
                Experiencia
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