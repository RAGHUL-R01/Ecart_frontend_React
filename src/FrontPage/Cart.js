import React from "react";
import "../Css_files/Cart.css";
const Cart = () => {
    var cart_data_from_localStorage = JSON.parse(localStorage.getItem("MoonKart_temp_storage"));
    const remove_item = (data_needs_to_remove) => {
        let tempt = cart_data_from_localStorage.filter(val => val.id !== data_needs_to_remove)
        if (tempt) {
        localStorage.setItem("MoonKart_temp_storage", JSON.stringify(tempt));}
        window.location.reload();
    }
    {console.log(cart_data_from_localStorage.length)}

    return (<div className="cart_bg">
        <div className="Welcome"> Welcome to Cart</div>
        <div className="empty_msg" > {cart_data_from_localStorage.length === 0 ? <div><i>Cart is Empty! Go back and add items</i></div> : null }</div>
        <div>
            {cart_data_from_localStorage.map(Result => {
                return (
                    <div className='product_box1'>
                
                        <img className='product_images1' src={Result.image} alt="stationary" />
                        <div className='product_desc1'>
                            <div className='cont_title12'>{Result.title}</div>
                            <div className='prod_content1'>
                                <div className='cont1'>{Result.description}</div>
                                <div className='cont_category1'>Category : {Result.category[0].toUpperCase() + Result.category.slice(1).toLowerCase()}</div>
                                <div className='cont_price1'>Price : {" $ " + Result.price}</div>
                                <div className='cont_rating1'>{"Rating : " + Result.rating.rate}</div>
                                <div className='cont_avail1'>Stocks available : <b>{Result.rating.count}</b> Pcs.</div>
                                <div className='button_parent1'>
                                    <button className="cart_remove" onClick={() => remove_item(Result.id)}>Remove From Cart</button>
                                </div>
                                
                            </div></div>
                    </div>
                )
            })}
        </div>
    </div>)

}

export default Cart;

// {cart_data_from_localStorage.forEach(element => element.title)}