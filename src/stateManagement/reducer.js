
export const initialState={
    cart:[],
}

function reducer(state, action){
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            // ADD TO BASKET LOGIC
            return { 
                ...state,
                cart: [...state.cart, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            // REMOVEE FROM BASKET LOGIC
            return { state };
        default:
            return state;
    }
}

export default reducer;