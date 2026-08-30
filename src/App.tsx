import { Articles } from './components/Articles'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { OpenSource } from './components/OpenSource'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Talks } from './components/Talk'
import { Toast } from './components/Toast'
import { useToast } from './hooks/useToast'

export function App() {
  const { message, show } = useToast()

  return (
    <>
      {/* Sections render as flat siblings of .page — the stagger animation keys off nth-child. */}
      <div className="page">
        <Hero />
        <Skills />
        <Experience />
        <Talks />
        <OpenSource />
        <Projects />
        <Articles />
        <Contact onCopied={show} />
      </div>
      <Toast message={message} />
    </>
  )
}
