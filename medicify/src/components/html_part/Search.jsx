import React from "react";
import "../css_part/Medicine.css";
import { Link } from "react-router-dom";
import { AllMedicines } from "../expi/allList";

function Search({ searchQuery }) {
  const filteredData = AllMedicines.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      {/* <List /> */}

      {filteredData && filteredData.length === 0 ? (
        <>
          <h1 className="list-heading" style={{margin: "21px 16px", marginBottom: "1px", width: "95%"}}>No Result Found!</h1>
        </>
      ) : (
        <>
          <h1 className="list-heading" style={{margin: "21px 16px", marginBottom: "5px", width: "95%"}}>Result based on search...</h1>
          <div className="box">
            <div className="box2">
              {filteredData.map((product) => (
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
                        <span className="cart-discount">
                          Rs.{product.price}
                        </span>
                      </div>
                    </Link>
                    <div className="edit-cart-btn-home">
                      <button className="main-cart-btn-home edit-btn-home">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Search;
