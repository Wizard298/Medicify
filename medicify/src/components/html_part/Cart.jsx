import React, { createContext, useReducer, useEffect } from 'react'
import { AllMedicines } from '../expi/allList.js';
import { reducer } from './Reducer.jsx';


// Creating context 
export const CartContext = createContext();

// const allItems = {
//     AllMedicines,
// };

const initialState = {
    item: AllMedicines,
    cart: [],
    totalAmount: 0, 
    totalItems: 0,
}

function Cart({children}) {
    const user = JSON.parse(localStorage.getItem("medicify_user"));
    const isLoggedIn = !!user; // true if user exists

    // Load initial cart from localStorage if exists
    const savedCartState = JSON.parse(localStorage.getItem(`create_cart_${user?.email}`)) || initialState;
    const [state, dispatch] = useReducer(reducer, savedCartState);

    // Save to localStorage on cart updates
    useEffect(() => {
      if (isLoggedIn) {
        localStorage.setItem(`create_cart_${user.email}`, JSON.stringify(state));
      }
    }, [state, isLoggedIn, user?.email]);


    const addToCart = (id) => {
      if (!isLoggedIn){
        alert("You have to login first before purchasing!");
        return;
      }
      return dispatch({
          type: "ADD_TO_CART",
          payload: id,
      });
    }

    const clearCart = () => {
      return dispatch({
          type: "CLEAR_CART"
      });
    }

  return (
    <>
      <CartContext.Provider value={{ state, addToCart, clearCart}}>
        {children}
      </CartContext.Provider>
    </>
  )
}

export default Cart;