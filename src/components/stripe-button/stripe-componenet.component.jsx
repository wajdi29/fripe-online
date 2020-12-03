import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
const priceForStripe = price * 100;
const publishableKey = 'pk_test_51HuCTXGfyjO9Io5agXWrdKs73hHcPkxaU31a8MkQdBMz7XsWmVkgmtE7ZTXmIieBuDT3JrWQTV1ksHlX7jMaHeZp00VP7x3xFU'

const onToken = token => {
    console.log(token)
    alert('Payment Successful')
}
return  (
    <StripeCheckout 
    label='Pay Now'
    name='Fripe-Online'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total costing is $${price}`}
    amount = {priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey = {publishableKey}
    />
)

}

export default StripeCheckoutButton