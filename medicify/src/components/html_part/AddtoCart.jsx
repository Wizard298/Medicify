import React, { useState, useEffect, useContext } from "react";
import '../css_part/AddtoCart.css'
import { useParams } from "react-router-dom";
// import axios from "axios";
// import { AllMedicines } from "../expi/allList";
import { CartContext } from "./Cart";
// import { CartContext } from "../Cart";


function AddtoCart() {
    const {state, addToCart} = useContext(CartContext);
    // const Ayurvedic1 = state.item.Ayurvedic1;

    console.log(state.item)
    
    const [data, setData] = useState([]);
    const { id } = useParams();


    useEffect(()=>{
      const exactData = state.item.find(item => item.id === parseInt(id));
      // console.log("exactData",exactData[0])
      setData(exactData);
    }, [id, state.item])


    // useEffect(() => {
    //   axios
    //     .get(`${process.env.REACT_APP_BACKEND_URL}/allmedicines/${id}`)
    //     .then((res) => {
    //       // console.log(res.data.oneItem[0].name);
    //       setData(res.data.oneItem[0]);
    //     })
    //     .catch((err) => console.log(err));
    // }, [id]);


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
            {data.cartAdded? (
              <button className="main-cart-btn-home edit-btn-home" style={{...editStyle, backgroundColor: "#e70000"}} onClick={()=>addToCart(data.id)}>
                  Remove From Cart
              </button>
            ):(
              <button className="main-cart-btn-home edit-btn-home" style={editStyle} onClick={()=>addToCart(data.id)}>
                Add to cart
              </button>
            )}
            {/* <button className="main-cart-btn-home edit-btn-home" style={editStyle}>
              Add to cart
            </button> */}
          </div>
        </div>
      </div>

    </>
  )
}

export default AddtoCart
