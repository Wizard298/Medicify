import React from "react";
import "../../css_part/Medicine.css";
import List from "../List";
import { Link } from "react-router-dom";
import { Ayurvedic1 } from "../../expi/productList";

function Ayurvedic() {
    
  return (
    <>
      <h1 className="list-heading">Ayurvedic</h1>

      <div className="box">
        <List />

        <div className="box2">
          {Ayurvedic1.map((product) => (
            <React.Fragment key={product.id}>
              <div className="container">
                <div className="cart-img">
                  <Link to={`/addtocart/${product.id}`}>
                    <img src={product.img} alt={product.name} />
                  </Link>
                </div>
                <Link to={`/addtocart/${product.id}`}>
                  <p className="cart-para">{product.name}</p>
                  <p className="cart-italic">{product.description}</p>
                  <div className="price">
                    <span className="cart-price">MRP:</span>
                    <span className="cart-discount">Rs.{product.price}</span>
                  </div>
                    <div className="edit-cart-btn-home">
                        <button className="main-cart-btn-home edit-btn-home">
                            Add To Cart
                        </button>
                    </div>
                </Link>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Ayurvedic;
