import React, { useContext } from 'react'
import "./Cartitems.css"
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from "../../assets/remove.webp"



const Cartitems = () => {

    const {getTotalCartAmount,all_product,cartItems,removeFromcart}=useContext(ShopContext);
    return (
        <div className='cartItems'>
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
           {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                              <div>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt='' className='carticon-product-icon' height='300px'/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>{e.new_price*cartItems[e.id]}</p>
                    <img src={remove_icon} alt='' height='20px' onClick={()=>removeFromcart(e.id)}/>
                </div>
                <hr/>
            </div>
                    </div>
            }
            return null;
           })}
           <div className="cartitems-down">
              <div className="cartitems-total">
                <h1>cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className='cartitems-total-item'>
                        <p>Total</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                </div>
                <button>Proceed to checkout</button>
              </div>
              <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type='text' placeholder='promo code'/>
                    <button>submit</button>
                </div>
              </div>
           </div>
        </div>
    )
}

export default Cartitems
