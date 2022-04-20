import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Info from './components/Info'
import Interest from './components/Interest'

const App = () => {
  return (
      <div className="card-container">
        <div className="card">
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    </div>
  )
}

export default App