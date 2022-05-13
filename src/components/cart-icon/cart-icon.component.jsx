import { useContext } from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'
import './cart-icon.styles.scss'

const CartIcon = () => {
    const {isCartOpen, setCartOpenStatus} = useContext(CartContext)
    const toggle =()=> {
        if(isCartOpen)
            setCartOpenStatus(false)
        else
            setCartOpenStatus(true)
    }

    return (
        <div className='cart-icon-container' onClick={toggle}>
            <ShoppingIcon  className='shopping-icon' />
            <span className='item-count'>20</span>
        </div>
    )

}

export default CartIcon;