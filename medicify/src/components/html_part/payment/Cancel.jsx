import React, { useEffect } from 'react'

function Cancel() {
  useEffect(()=>{
    localStorage.removeItem("isCheckoutInProgress");
  }, [])
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Payment Cancelled</h1>
      <p>Ordered has been cancelled, please try again later!</p>
      <br />
      <a href="/cart">
        <button>Return to Cart</button>
      </a>
    </div>
  );
}

export default Cancel;

