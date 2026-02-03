import HeroSection from './components/HeroSection'
import QuienSoy  from './components/QuienSoy.tsx'
import FaultyTerminal from './components/FaultyTerminal'
import Experiencia  from './components/Experiensa.tsx'
import Estudios from './components/Estudios.tsx'
import './App.css'

function App() {

  return (
    <>

      <div style={{ width: '100vw', height: '100vh', position: 'fixed' , zIndex: -1 }}>
          <FaultyTerminal
            scale={1.5}
            gridMul={[2, 1]}
            digitSize={1.2}
            timeScale={0.5}
            pause={false}
            scanlineIntensity={0.5}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0.1}
            tint="#A7EF9E"
            mouseReact
            mouseStrength={0.5}
            pageLoadAnimation
            brightness={0.6}
          />
      </div>
       <div className='z-10'>
        <HeroSection/>
    
        <QuienSoy/>
        <Experiencia/>
        <Estudios/>
       </div>
    </>
    
  )
}

export default App
