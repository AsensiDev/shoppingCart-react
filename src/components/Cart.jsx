import { CartIcon, ClearCartIcon } from './Icons'
import { useId, useState } from 'react'
import './Cart.css'

export default function Cart() {

    const cartCheckboxId = useId()
    const [quantity, setQuantity] = useState(1)

  return (
    <>
        <label className='cart-button' htmlFor={cartCheckboxId}>
            <CartIcon />
        </label>
        <input type="checkbox" id={cartCheckboxId} hidden />

        <aside className="cart">
            <ul>
                <li>
                    <img 
                        src="https://media.direct.playstation.com/is/image/psdglobal/PS5PRO-Hero-1" 
                        alt="iphone photo" 
                        width='200'
                    />
                    <div>
                        <strong>Iphone</strong> - $1499
                    </div>

                    <div>
                        <small>
                            Qty: {quantity}
                        </small>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>
                </li>
            </ul>

            <button>
                <ClearCartIcon />
            </button>
        </aside>
    </>
  )
}
