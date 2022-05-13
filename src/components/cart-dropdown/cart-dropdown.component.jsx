import Button from "../button/button.component";
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    return (
        <div className="cart-dropdown-container">
            DropDown
            <div className='cart-items'></div>
            <Button buttonType='default' >Checkout</Button>
        </div>
    )
}

export default CartDropdown;