import TextType from "./TextType"
function HeroSection() {

  return (
    
    <div>
        
        <div className="container mx-auto bg-black/50 rounded-full ">
            <div className="flex justify-center align-center">
                 <img className="rounded-full w-50 h-50 m-5" src="/joaquin.jpeg"></img>
            </div>
            <div className="flex justify-center align-center">
               <TextType 
                text={["Joaquin Emmanuel Amezcua Navarro","Desarrollador"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                deletingSpeed={50}
                cursorBlinkDuration={0.5}
                className="text-white font-mono text text-5xl"
                />
            </div>

    </div>
    </div>
  )
}

export default HeroSection
