import EstudiosCard from "./EstudiosCard"
function Estudios(){
    return(
        <div className="container mx-auto bg-black/50 mt-10">
            <div className="flex justify-start">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                   Estudios
                </h1>
            </div>
            <div className="flex justify-center gap-5">
               <EstudiosCard
                titulo="Carrera tecnica"
                descripcion="TÉCNICO COMO ESPECIALIZADO EN SISTEMAS COMPUTACIONALES, DISEÑO DE APLICACIONES WEB Y BASE DE DATOS"    
                image="../public/tecnica.png"   
               />
               <EstudiosCard
               titulo="informatica"
               descripcion="estudiante informatica en mi 6to semestre"
               image="../public/info.png"
               />
            </div>

        </div>
    )

}
export default Estudios