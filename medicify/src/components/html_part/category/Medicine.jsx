import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import List from "../List";
import "../../css_part/Medicine.css";
import "../../css_part/Health.css";
import axios from "axios";
import Loading from "../Loading";
import '../../css_part/loading.css'
// import InfiniteScroll from "react-infinite-scroll-component";

function Medicine() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(6)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/allmedicines?limit=${limit}`)
      .then((res) => {
        // console.log(res.data.medicify);
        setData(res.data.medicify);
        setLoading(false)
      })
      .catch((err) => console.log(err));
  }, [limit]);


  // Infinit Scrolling
  const handleInfinte = async ()=>{
    // console.log("scrollheight2062", document.documentElement.scrollHeight)
    // console.log("innerHeight730", window.innerHeight)
    // console.log("scrollTop", document.documentElement.scrollTop)
    try{
      if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
        setLimit(inc => inc + 6)
        setLoading(true)
      }
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleInfinte)
    return () => window.removeEventListener('scroll', handleInfinte)
  },[])

  // Mapping
  const listItems = data.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <div className="container">
          <div className="cart-img">
            <Link to={`/addtocart/${item.id}`}>
              <img src={item.img} alt={item.name} />
            </Link>
          </div>
          <Link to={`/addtocart/${item.id}`}>
            <p className="cart-para">{item.name}</p>
            <p className="cart-italic">{item.description}</p>
            <div className="price">
              <span className="cart-price">Best Price</span>
              <span className="cart-discount">Rs.{item.price}</span>
            </div>
          </Link>
          <button className="main-cart-btn-home edit-btn-home">
            Add to cart
          </button>
        </div>
      </React.Fragment>
    );
  });

  const inline ={
    display:"block",
    width: "100%"
  }

  return (
    <>
        <h1 className="list-heading">All Medicines</h1>

        <div className="box">
          <List />

          <div className="box2">
            {listItems}
            <div style={inline}>
              {loading && <Loading/>}
            </div>
          </div>
        </div>
    </>
  );
}

export default Medicine;
