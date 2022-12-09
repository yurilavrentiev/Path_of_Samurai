import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    profilePage: {
      newPostText: '',
      posts: [
        {id: "1", massage: "My firs post!"},
        {id: "2", massage: "Hi! How are you?"},
        {id: "3", massage: "I love dogs! And, maybe 3 people!"},
      ],
    },
    dialogsPage: {
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
    },
  },
  _callSubscriber() {
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch (action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
}

export default store;

