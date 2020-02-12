const initState = {
  numOfCakes: 10
}


const cakeReducer = (state = initState, action) => {
  switch(action.type) {
    case 'BUY_CAKE': 
    if(state.numOfCakes >= 1) {
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    } else {
      console.log('NO CAKES!!!');
      return state;
      }
    default: return state;
  }
}

export default cakeReducer;
