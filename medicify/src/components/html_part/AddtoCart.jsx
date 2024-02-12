import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css_part/AddtoCart.css'
import { useParams } from "react-router-dom";
import axios from "axios";

function AddtoCart() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
          .get(`http://localhost:3500/allmedicines/${id}`)
          .then((res) => {
            console.log(res.data.medicify);
            setData(res.data.medicify);
          })
          .catch((err) => console.log(err));
      }, [id]);


      const listItems = data.map((item, index) => {
        return (
          <>

            <div className="addcart-img">
                <img src={item.img} alt={item.name}/>
            </div>
            <div className='addcart-div'>
                <div className='addcart-div-part1'>
                    <h1 className='addtocart-heading'>{item.name}</h1>
                    <p className='addtocart-para'>{item.description}</p>
                </div>
                <div className='addcart-div-part2'>
                    <h3 className='addtocart-price'>Rs. {item.price}</h3>
                    <p className='addtocart-para'>Inclusive of all taxes</p>
                    <i>*This product cannot be returned for a refund or exchange</i>
                    <br />
                    <i>*Country of Origin: <b>India</b> </i>
                    <br />
                    <i>*Delivery Changes if applicable will be applied at checkout</i>
                    <br />
                    <button className="main-cart-btn-home edit-btn-home" style={editStyle}>Add to cart</button>
                </div>
            </div>          
          </>
        );
      });

      const editStyle ={
        width: "35vw",
        padding: "13px",
        fontSize: "18px",
        marginTop: 51
      }

  return (
    <>
    
    <div className="addcart-page">
        <div className="addcart-img">
            <img src="https://www.netmeds.com/images/product-v1/150x150/112125/vicks_vaporub_5_ml_0.jpg" alt="error"/>
        </div>
        <div className='addcart-div'>
            <div className='addcart-div-part1'>
                <h1 className='addtocart-heading'>Vicks Vaporub 5 ml</h1>
                <p className='addtocart-para'>Mkt: Procter &amp; Gamble Hygiene And Health Care Limited</p>
            </div>
            <div className='addcart-div-part2'>
                <h3 className='addtocart-price'>Rs. 22.80</h3>
                <p className='addtocart-para'>Inclusive of all taxes</p>
                <i>*This product cannot be returned for a refund or exchange</i>
                <br />
                <i>*Country of Origin: <b>India</b> </i>
                <br />
                <i>*Delivery Changes if applicable will be applied at checkout</i>
                <br />
                <button className="main-cart-btn-home edit-btn-home" style={editStyle}>Add to cart</button>
            </div>
        </div>
        {/* {listItems} */}
    </div>

    </>
  )
}

export default AddtoCart
