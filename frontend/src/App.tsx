import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TechStack from './components/TechStack'

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App