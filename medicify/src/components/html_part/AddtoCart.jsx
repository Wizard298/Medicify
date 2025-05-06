import React, { useState, useEffect } from "react";
import '../css_part/AddtoCart.css'
import { useParams } from "react-router-dom";
import axios from "axios";

function AddtoCart() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/allmedicines/${id}`)
          .then((res) => {
           // console.log(res.data.oneItem[0].name);
            setData(res.data.oneItem[0]);
          })
          .catch((err) => console.log(err));
      }, [id]);


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
          <img src={data.img} alt={data.name} />
        </div>
        <div className="addcart-div">
          <div className="addcart-div-part1">
            <h1 className="addtocart-heading">{data.name}</h1>
            <p className="addtocart-para">{data.description}</p>
          </div>
          <div className="addcart-div-part2">
            <h3 className="addtocart-price">Rs. {data.price}</h3>
            <p className="addtocart-para">Inclusive of all taxes</p>
            <i>*This product cannot be returned for a refund or exchange</i>
            <br />
            <i>
              *Country of Origin: <b>India</b>
            </i>
            <br />
            <i>*Delivery Changes if applicable will be applied at checkout</i>
            <br />
            <button className="main-cart-btn-home edit-btn-home"
              style={editStyle}>
              Add to cart
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default AddtoCart
