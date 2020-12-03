
import React from 'react'
import './checkout.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import StripeCheckoutButton from '../../components/stripe-button/stripe-componenet.component'
const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">

        <div className='checkout-header'>

            <div className='header-blocks'>
                <span>Product</span>
            </div>

            <div className='header-blocks'>
                <span>Description</span>
            </div>

            <div className='header-blocks'>
                <span>Quantity</span>
            </div>

            <div className='header-blocks'>
                <span>Price</span>
            </div>

            <div className='header-blocks'>
                <span>Remove</span>
            </div>

        </div>
        {
            cartItems.map(cartItem => (

                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))

        }

        <div className='total'> <span>TOTAL: ${total}</span></div>
               <div className='test-warning'>
               *Please user the following test credit card for payment
               <br/>
              4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
               </div>
    
            <StripeCheckoutButton price={total} />
    </div>

)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)