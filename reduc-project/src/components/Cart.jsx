import React from 'react'
import { useSelector } from 'react-redux'




function Cart() {

    const cartItems = useSelector(state=>state.cartStore.cart)
    console.log(cartItems.length)
  return (
   <>
    <div>
    <h1>Cart</h1>
    {
        cartItems.map((item)=>{
            return(
                <div>

                </div>
            )

        })
    }
    </div>
   </>
  )
}

export default Cart