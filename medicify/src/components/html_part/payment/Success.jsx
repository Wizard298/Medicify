import { useEffect, useRef, useContext } from "react";
import { CartContext } from "../Cart";

function Success() {
  const { state, clearCart } = useContext(CartContext);
  const hasSaved = useRef(false); // <-- This persists across renders

  useEffect(() => {
    const storedUser = localStorage.getItem("medicify_user");
    const email = storedUser ? JSON.parse(storedUser).email : null;

    const cartItems = state.item.filter((item) => item.cartAdded);
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

    if (cartItems.length && email && !hasSaved.current) {
      hasSaved.current = true; // Mark it saved

      fetch(`${process.env.REACT_APP_BACKEND_URL}/payment/save-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, cartItems, totalAmount }),
      })
        .then((res) => res.text())
        .then((msg) => console.log(msg));

      clearCart();
    }

    localStorage.removeItem("isCheckoutInProgress");
  }, [clearCart, state.item]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Payment Successful!</h2>
      <p>Your order has been placed successfully.</p>
    </div>
  );
}

export default Success;


// import React, { useEffect, useState } from "react";

// const Success = () => {
//   const [orders, setOrders] = useState([]);
//   const user = JSON.parse(localStorage.getItem("user"));
//   const email = user?.email;

//   useEffect(() => {
//     // localStorage.removeItem("isCheckoutInProgress");
//     fetch(`${process.env.REACT_APP_BACKEND_URL}/payment/success?email=${email}`)
//       .then((res) => res.json())
//       .then((data) => setOrders(data))
//       .catch((err) => console.error(err));
//   }, [email]);

//   const handleDelete = async (orderId) => {
//     await fetch(`${process.env.REACT_APP_BACKEND_URL}/payment/order/${orderId}`, {
//       method: "DELETE",
//     });

//     // Update UI
//     setOrders(orders.filter(order => order._id !== orderId));
//   };

//   return (
//     <div className="success-page">
//       <h2>🎉 Order Placed Successfully!</h2>
//       {orders.map((order) => (
//         <div key={order._id} className="order-card">
//           <h3>Status: {order.status}</h3>
//           <ul>
//             {order.cartItems.map((item, index) => (
//               <li key={index}>
//                 {item.quantity} × {item.name} - ₹{item.price}
//               </li>
//             ))}
//           </ul>
//           <p>Total: ₹{order.totalAmount}</p>
//           {order.status === "completed" && (
//             <button onClick={() => handleDelete(order._id)}>🗑 Delete Order</button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Success;
