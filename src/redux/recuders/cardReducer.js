const initState = {
  cardList: []
};

const cardReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_CARD': 
      return {
        ...state, cardList: [...state.cardList, action.payload ]
      };
    default: return state
  }
}

export default cardReducer;
