import React from "react";
import "../Css_files/Cart.css";
const Cart = () => {
    var cart_data_from_localStorage = JSON.parse(localStorage.getItem("MoonKart_temp_storage"));
    const remove_item = (dta) => {
        var tempt = cart_data_from_localStorage.filter(val => val.id !== dta)
        localStorage.setItem("MoonKart_temp_storage", JSON.stringify(tempt))
        window.location.reload();
    }
    return (<div>
        <div className="Welcome"> Welcome to Cart</div>
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