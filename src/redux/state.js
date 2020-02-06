let store = {
  _state : {
    DialogsNameData: [
      {id: 1, name: 'Vova'},
      {id: 2, name: 'Oleksandr'},
      {id: 3, name: 'Dmitriy'},
      {id: 4, name: 'Vasyl'},
      {id: 5, name: 'Pavlo'},
      {id: 6, name: 'Sofiia'}
    ],
    DialogsMsgData: [
      {id: 1, msg: 'Hola!'},
      {id: 2, msg: 'Bonjour?'}
    ],
    DialogsMyMsgData: [
      {id: 1, myMsg: "Como estas?"},
      {id: 2, myMsg: "Bien, gracias"}
    ]
  },  
  getState() {
    return this._state  
  },
  // dispatch(action) {
  //   switch(action.type) {
  //     case 'CONSOLE_LOG' : console.log('HELLO! FROM ', action.payload);
  //       break;
        
  //     default: return null;
  //   }
  // }

};
window.store = store;

export default store;