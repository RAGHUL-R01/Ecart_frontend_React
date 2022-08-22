import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import "../Css_files/Front_page.css";
import { useNavigate } from "react-router-dom";


const Front_page = () => {
    let navigate = useNavigate();
    var Temp_value = [];
    const [image_index, Setindex] = useState(0);
    const [Api_index, Set_Apiindex] = useState([]);
    // useEffect(()=>{timer()},[]) ;
    useEffect(() => { API_CALL() }, []);
    const [sliding_images] = useState([
        "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/5bca549eed255944.jpg?q=50",
        "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/18d95101a6757507.jpg?q=50",
        "https://rukminim1.flixcart.com/fk-p-flap/1688/280/image/1ddffc77b3ddefe5.jpeg?q=50"])
    async function API_CALL() {
        let response = await fetch('https://fakestoreapi.com/products');
        let data_ = await response.json();
        Set_Apiindex(data_);
        console.log(data_);
    }
    const Adding_to_cart = (Value) => {

        Temp_value.push(Value);
        localStorage.setItem("MoonKart_temp_storage", JSON.stringify(Temp_value));
        console.log(Temp_value);
    }
    function Slider() {
        if (image_index > 1) {
            Setindex(0);
        }
        else {
            Setindex(image_index + 1);
        }
        // console.log(image_index)
    }
    // setTimeout(() => Slider(), 4000); 
    return (<div class="body_head">
        <div class="Container_bar">
            <header class="navbar">
                <div class="Company_name"><div>Moonkartz</div></div>
                <div class="searchbar">
                    <input type="text" placeholder='Search' className="Bar" />
                    <button class="icon_search"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg></button>
                </div>
                <div className='button_group'>
                    <button className='nav_button' onClick={() => navigate('/login')}><strong><i>Login </i></strong></button>
                    <button className='nav_button1'><strong><i>Stacks </i></strong></button>
                    <button className='nav_button2' onClick={() => navigate('/cart')}><div>Cart</div></button>
                </div>
            </header>
            <section class="QuickLinksTab"><a href="#Section_bar">
                <div className="catergory_cont">
                    <div><div><img class="category_images" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="custom_img" /></div><div className='catergory_text'>Top Offers</div></div>
                    <div><div><img class="category_images" src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="custom_img" /></div><div className='catergory_text'>Groceries</div></div>
                    <div><div><img class="category_images" src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="custom_img" /></div><div className='catergory_text'>Mobiles</div></div>
                    <div><div><img class="category_images" src="https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100" alt="custom_img" /></div><div className='catergory_text'>Fashion</div></div>
                    <div><div><img class="category_images" src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="custom_img" /></div><div className='catergory_text'>Electronics</div></div>
                    <div><div><img class="category_images" src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="custom_img" /></div><div className='catergory_text'>Toys</div></div>
                    <div><div><img class="category_images" src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="custom_img" /></div><div className='catergory_text'>Appliances</div></div>
                    <div><div><img class="category_images" src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="custom_img" /></div><div className='catergory_text'>Travel</div></div>
                    <div><div><img class="category_images" src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="custom_img" /></div><div className='catergory_text'>Home</div></div>
                </div> </a>
            </section>
            <section class="GridArea1">
                <div className='Imge_area'><img class="Image_area" src={sliding_images[image_index]} alt="ads" /></div>
            </section>
            <section className='Grid_boxes'>
                <div className='First_box'>

                    <div className='Header_grid_box'>Escape into the world of Gaming</div>
                    <a href="#Section_bar"> <div className='body_grid_box'>
                        <div className='grid_content'>
                            <img className='grid_image1' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/Q2/372x232_DesktopQC_VG_1_1x._SY116_CB637347210_.jpg" alt="gamecontroller" /><div className='grid_fonts'>Contollers</div></div>

                        <div className='grid_content'>
                            <img className='grid_image1' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/Q2/372x232_DesktopQC_VG_2_1x._SY116_CB637347210_.jpg" alt="headphone" /><div className='grid_fonts'>Gaming Headphones</div></div>
                    </div>
                        <div className='body_grid_box'>
                            <div className='grid_content'>
                                <img className='grid_image1' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/Q2/372x232_DesktopQC_VG_4_1x._SY116_CB637347210_.jpg" alt="ipad" /><div className='grid_fonts'>Streaming devices</div></div>
                            <div className='grid_content'>
                                <img className='grid_image1' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/Q2/372x232_DesktopQC_VG_3_1x._SY116_CB637347210_.jpg" alt="wheels" /><div className='grid_fonts'>Racing Wheels</div></div></div>
                    </a>
                </div>
                <div className='First_box1'>
                    <div className='Header_grid_box'>Up to 70% off | Clearance store</div>
                    <a href="#Section_bar">  <div className='img_align_1'><img className='grid_image2' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg" alt="laptop" /></div>
                    </a> </div>
                <div className='First_box2'>
                    <div className='Header_grid_box'>Celebrating Indian Fashion</div>
                    <a href="#Section_bar"><div className='img_align_1'><img className='grid_image2' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Events/ID22/PCCC/desktop_Category_Card_for_indie_style_1x._SY304_CB629238384_.jpg" alt="laptop" /></div>
                    </a>  </div>
                <div className='First_box3'> <div className='Header_grid_box'>Up to 60% off | Styles for Women</div>
                    <a href="#Section_bar"> <div className='img_align_1'><img className='grid_image2' src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Events/ID22/PCCC/desktop_Category_Card_for_indie_innovations_1x._SY304_CB629238384_.jpg" alt="laptop" /></div>
                    </a>  </div>
            </section>
            <section className='products_flex'>
                <div className='cont_title1'>Some of our top selling products:</div>
                {Api_index.map(Result => {
                    return (
                        <div className='product_box' id="Section_bar">
                            <img className='product_images' src={Result.image} alt="stationary" />
                            <div className='product_desc'>
                                <div className='cont_title'>{Result.title}</div>
                                <div className='prod_content'>
                                    <div className='cont'>{(Result.description.split(".")[0].length < 150 ? Result.description.split(".")[0] : null)}</div>
                                    <div className='cont_category'>Category : {Result.category[0].toUpperCase() + Result.category.slice(1).toLowerCase()}</div>
                                    <div className='cont_price'>Price : {" $ " + Result.price}</div>
                                    <div className='cont_rating'>{"Rating : " + Result.rating.rate}</div>
                                    <div className='cont_avail'>Stocks available : <b>{Result.rating.count}</b> Pcs.</div>
                                    <div className='button_parent'>
                                        <button className="cart_add" type="button" onClick={() => Adding_to_cart(Result)}>Add to Cart</button>
                                    </div>
                                </div></div>
                        </div>
                    )
                })}
            </section>
            <footer className='foot_er'>
                <div className='foot_header'>
                    <a href='#'><div className='privacy_condition'>Terms and Conditions</div></a>
                    <div className='the_end'> &copy; 2022, MoonKartz, Inc. or it's affiliates</div></div>
            </footer>
        </div>
    </div>)
}

export default Front_page;

// <div>8124284940</div>
// KO songs