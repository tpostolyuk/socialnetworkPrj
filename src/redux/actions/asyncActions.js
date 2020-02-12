// const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
// const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
// const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// const fetchUsersRequest = () => {
//   return {
//     type: FETCH_USERS_REQUEST
//   }
// };

// const fetchUsersSuccess = users => {
//   return {
//     type: FETCH_USERS_SUCCESS,
//     payload: users
//   }
// };

// const fetchUsersFailure = error => {
//   return {
//     type: FETCH_USERS_FAILURE,
//     payload: error
//   }
// }

// const fetchUsers = () => {
//   return dispatch => {
//     dispatch(fetchUsersRequest);
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(result => result.json())
//       .then(data => {
//         dispatch(fetchUsersSuccess(data))
//         console.log(data);
//       }
//       )
//       .catch(error => dispatch(fetchUsersFailure(error.message)));
//   }
// }
// export default fetchUsers;