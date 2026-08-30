import { Apps } from './components/Apps'
import { Background } from './components/Background'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Focus } from './components/Focus'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { OpenSource } from './components/OpenSource'
import { Talks } from './components/Talks'
import { Writing } from './components/Writing'
import { useReveal } from './hooks/useReveal'
import './App.css'

export function App() {
  useReveal('.reveal')

  return (
    <div className="page">
      <Background />
      <div className="page-content">
        <Header />
        <Hero />
        <Focus />
        <Experience />
        <OpenSource />
        <Apps />
        <Talks />
        <Writing />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
