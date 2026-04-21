import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Header from './components/Header'
import CV from './pages/CV'
import Contact from './pages/Contact'
function App() {
  return (
    <>
    <Header />
    <main>

    <Routes>
      <Route index element={<Home />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="CV" element={<CV />} />
      <Route path="experience" element={<Experience />} />

    </Routes>
    </main>

    </>
  )
}

export default App
