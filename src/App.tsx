import { Apps } from './components/Apps'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { OpenSource } from './components/OpenSource'
import { Writing } from './components/Writing'
import { useLiveRepoStats } from './hooks/useLiveRepoStats'
import { useReveal } from './hooks/useReveal'
import './App.css'

export function App() {
  useReveal('.reveal')
  // Fetched once here because both the hero total and the repo cards read it.
  const stats = useLiveRepoStats()

  return (
    <div className="page">
      <Header />
      <Hero stars={stats.stars} />
      <OpenSource stats={stats} />
      <Experience />
      <Apps />
      <Writing />
      <Contact />
      <Footer />
    </div>
  )
}
