const BASKET_INCREMENT = "BASKET_INCREMENT";
const BASKET_DECREMENT = "BASKET_DECREMENT";
const BASKET_ADD = "BASKET_ADD";
const BASKET_REMOVE = "BASKET_REMOVE";
const BASKET_CLEAR = "BASKET_CLEAR"



export const basketIncrementAction = (payload) => ({
  type: BASKET_INCREMENT,
  payload,
});
export const basketDecrementAction = (payload) => ({
  type: BASKET_DECREMENT,
  payload,
});
export const basketAddAction = (payload) => ({
    type: BASKET_ADD,
    payload,
  });

  export const basketRemoveAction = (payload) => ({
    type: BASKET_REMOVE,
    payload,
  });

  export const basketClearAction = () => ({
    type: BASKET_CLEAR
  });

  const defaultState = JSON.parse(localStorage.getItem('basket')) ?? [];

  const writeToLocalStorage = (basket) => localStorage.setItem('basket', JSON.stringify(basket));

  


export const basketReducer = (state = defaultState, action) => {
    if (action.type === BASKET_ADD) {
        const product = state.find(({ id }) => id === action.payload);
         
        if (product === undefined) {
           const newState = [...state, {id: action.payload, count: 1}];
           writeToLocalStorage(newState);
           return newState
        
        }else{
            product.count++;
           writeToLocalStorage(state);

            return [...state];

        }

    } else if (action.type === BASKET_REMOVE) {
      const newState = state.filter(({ id }) => id !== action.payload);
      writeToLocalStorage(newState);

    return newState
    
  }else if (action.type === BASKET_INCREMENT){
    const product = state.find(({id}) => id === action.payload);
    product.count++;
    writeToLocalStorage(state);

    return [...state]
  
  } else if (action.type === BASKET_DECREMENT) {
    const product = state.find(({ id }) => id === action.payload);
    product.count--;

    if (product.count === 0){
      const newState = state.filter(item => item !== product);
    writeToLocalStorage(newState);

        return newState
    }
    writeToLocalStorage(state);

    return [...state];
  
}else if (action.type === BASKET_CLEAR) {
  writeToLocalStorage([]);

  return [];
}
return state
}