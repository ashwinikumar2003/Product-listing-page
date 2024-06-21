import React from 'react'
import './App.css'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to the store</h2>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  )
}

export default App
