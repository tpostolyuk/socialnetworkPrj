// const initState = {
//   loading: false,
//   users: [],
//   error: ''
// }

// const asyncReducer = (state = initState, action) => {
//   switch(action.type) {
//     case 'FETCH_USERS_REQUEST' : return { ...state, loading: true }
//     case 'FETCH_USERS_SUCCESS' : return { ...state, users: action.payload, loading: false }
//     case 'FETCH_USERS_FAILURE' : return { users: [], loading: false, error: action.payload }
//     default: return state;
//   }
// }

// export default asyncReducer;
