import { CartIcon, ClearCartIcon } from './Icons'
import { useId, useState } from 'react'
import './Cart.css'
import { useCart } from '../hooks/useCart'

function CartItem({ thumbnail, price, title, quantity, addToCart}) {

    return (
        <li>
            <img 
                src={thumbnail}
                alt={title}
                width='200'
                />
            <div>
                <strong>Iphone</strong> - ${price}
            </div>

            <div>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart} >+</button>
            </div>
        </li>
    )
}

export default function Cart() {

    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart()

  return (
    <>
        <label className='cart-button' htmlFor={cartCheckboxId}>
            <CartIcon />
        </label>
        <input type="checkbox" id={cartCheckboxId} hidden />

        <aside className="cart">
            <ul>
                {cart.map(product => (
                    <CartItem 
                        key={product.id} 
                        {...product} 
                        addToCart={() => addToCart(product)}
                    />
                ))}
            </ul>

            <button onClick={clearCart}>
                <ClearCartIcon />
            </button>
        </aside>
    </>
  )
}
