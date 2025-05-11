export const reducer = (state, action) => {

    if(action.type === "ADD_TO_CART"){
        
        const updatedItems = state.item.map((curElem) => {
            if(curElem.id === action.payload){
                return {...curElem, cartAdded: !curElem.cartAdded};
            }
            return curElem;
        });

        return {...state, item:updatedItems};
    }

    if(action.type === "CLEAR_CART"){

        const clearedItems = state.item.map((curElem) => {
            return {
                ...curElem,
                cartAdded: false,
            }
        })

        return {...state, item:clearedItems};
    }
    
    
    return state;
}