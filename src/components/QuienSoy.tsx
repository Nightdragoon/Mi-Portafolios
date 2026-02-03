function QuienSoy() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            ¿Quién soy?
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed text-justify space-y-4">
            <span className="block">
              Desarrollador <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">Full Stack</span> y 
              estudiante de Informática con experiencia profesional en entornos reales de desarrollo, 
              incluyendo proyectos para <span className="font-semibold text-purple-300">GSTECH</span>.
            </span>
            <span className="block mt-4">
              Lidero la división de programación en <span className="font-semibold text-pink-300">STEM FESC</span> y 
              he participado en múltiples hackathones, combinando velocidad de ejecución, 
              pensamiento lógico y trabajo colaborativo para entregar productos funcionales.
            </span>
          </p>

         
        </div>
      </div>
    </div>
  );
}

export default QuienSoy;