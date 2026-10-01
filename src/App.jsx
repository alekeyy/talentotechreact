import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import ItemListContainer from './components/item/ItemListContainer.jsx'
import ItemDetailContainer from './components/item/ItemDetailContainer.jsx'

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default App
