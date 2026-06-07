import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import { sampleProducts } from './components/ProductList'

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkTheme, setDarkTheme] = useState(true)
    const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  // TODO: Implement state for cart management
  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product])
  }

  // TODO: Implement state for category filtering
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const filteredProducts = sampleProducts.filter((product) => {
    if (selectedCategory === 'all') return true
    return product.category === selectedCategory
  })



  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle onClick = {toggleTheme} darkTheme={darkTheme}/>

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select 
        id="category-select"
        value={selectedCategory} 
        onChange={handleCategoryChange}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value = "NonExistent">NonExistent</option>
      </select>

      {selectedCategory === "NonExistent" ? <p>no products available</p> : <ProductList products = {filteredProducts} addToCart={handleAddToCart} />}

      {/* TODO: Implement and render Cart component */}
      <Cart cartItems={cart}/>
    </div>
  )
}

export default App
