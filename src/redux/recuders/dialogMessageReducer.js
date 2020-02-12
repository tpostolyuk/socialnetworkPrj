const initState = {
  messages: [
      {id: 1, message: "Hello!"},
      {id: 2, message: "How's it goin?"}
  ]
};

const messageReducer = (state = initState, action) => {
  return state;
}

export default messageReducer;