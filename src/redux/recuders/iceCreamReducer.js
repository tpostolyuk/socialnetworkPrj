const initState = {
  numOfIceCream: 20
}


const iceCreamReducer = (state = initState, action) => {
  switch(action.type) {
    case 'BUY_ICECREAM': 
    if(state.numOfIceCream >= 1) {
      return { ...state, numOfIceCream: state.numOfIceCream - 1 };
    } else {
      console.log('NO ICECREAM!!!');
      return state;
      }
    default: return state;
  }
}

export default iceCreamReducer;
