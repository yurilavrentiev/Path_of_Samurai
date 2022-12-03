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
  getState() {
    return this._state;
  },
  _callSubscriber() {
  },
  addPost () {
    const newPost = {
      id: (this._state.profilePage.posts.length + 1).toString(),
      massage: this._state.profilePage.newPostText,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state)
  },
  updatePostText (postText) {
    this._state.profilePage.newPostText = postText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
}


export default store;

