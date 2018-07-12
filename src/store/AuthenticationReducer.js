const initState = {
  user: {
    name: 'Admin',
    username: 'admin',
    avatar: 'https://semantic-ui.com/images/avatar/small/elliot.jpg',
    password: '123456',
  },
};

export default function AuthenticationReducer(state = initState, action) {
  switch (action.type) {
    default: return state;
  }
}