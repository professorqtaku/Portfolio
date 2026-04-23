import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import ExperiencePage from './pages/ExperiencePage'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App