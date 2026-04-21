import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
function App() {
  return (
    <div className="min-h-screen flex flex-col">
    <main className="flex-grow">
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </main>
    <Footer />

    </div>
  )
}

export default App
