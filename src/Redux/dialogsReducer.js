
const initialState = {
  newDialogText: '',
  massages: [
    {id: "1", massage: "How are you?"},
    {id: "2", massage: "Where is my spoon?"},
    {id: "3", massage: "Take your time"},
    {id: "4", massage: "Say it! Don't spray it!!!"},
  ],
  dialogs: [
    {id: "1", name: "Anna"},
    {id: "2", name: "Andrey"},
    {id: "3", name: "Dmitry"},
    {id: "4", name: "Yuri"},
    {id: "5", name: "Lera"},
  ],
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'send': {
      const newMassage = {
        id: (state.massages.length +1).toString(),
        massage: state.newDialogText,
      };
      const newState = {...state};
      newState.massages = [...state.massages]
      newState.massages.push(newMassage);
      newState.newDialogText = "";
      return newState;
    }
    case 'set': {
      const newState = {...state};
      newState.newDialogText = action.payload;
      return newState;
    }
    default: 
      return state;
  }
  
}

export const sendMassageActionCreator = () => {
  return {
    type: 'send',
  }
}
export const updateMassageActionCreator = (text) => {
  return {
    type: 'set',
    payload: text,
  }
}

export default dialogsReducer;
