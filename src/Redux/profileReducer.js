
const initialState = {
  newPostText: '',
  posts: [
    {id: "1", massage: "My firs post!"},
    {id: "2", massage: "Hi! How are you?"},
    {id: "3", massage: "I love dogs! And, maybe 3 people!"},
  ],
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'add': {
      const newPost = {
        id: (state.posts.length + 1).toString(),
        massage: state.newPostText,
      };
      const newState = {...state};
      newState.posts = [...state.posts]
      newState.posts.push(newPost);
      newState.newPostText = "";

      return newState;
    }
    case 'update': {
      const newState = {...state};
      newState.newPostText = action.payload;

      return newState;
    }
    default: 
      return state;
    
  }
}

export const addPostActionCreator = () => {
  return {
    type: 'add',
  };
}
export const updateTextActionCreator = (text) => {
  return {
    type: 'update',
    payload: text,
  }
}

export default profileReducer;
