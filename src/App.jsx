import { useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import ProductModal from './components/ProductModal'
import QuoteCart from './components/QuoteCart'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.qty, 0),
    [cartItems],
  )

  function addToQuote(product, finish) {
    setCartItems((prev) => {
      const key = `${product.id}__${finish}`
      const existing = prev.find((i) => i.key === key)
      if (existing) {
        return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + 1 } : i))
      }
      return [
        ...prev,
        {
          key,
          productId: product.id,
          name: product.name,
          type: product.type,
          material: product.material,
          gender: product.gender,
          finish,
          qty: 1,
        },
      ]
    })
    setSelectedProduct(null)
    setCartOpen(true)
  }

  function updateQty(key, delta) {
    setCartItems((prev) =>
      prev
        .map((i) => (i.key === key ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    )
  }

  function removeItem(key) {
    setCartItems((prev) => prev.filter((i) => i.key !== key))
  }

  function clearCart() {
    setCartItems([])
  }

  return (
    <div className="min-h-screen bg-plomo text-vino">
      <Header cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Catalog onSelectProduct={setSelectedProduct} />
        <About />
      </main>
      <Footer />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToQuote={addToQuote}
      />
      <QuoteCart
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onUpdateQty={updateQty}
        onRemove={removeItem}
        onClear={clearCart}
      />
    </div>
  )
}
