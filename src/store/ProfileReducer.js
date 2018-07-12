const initState = {
  user: {
    name: 'Admin',
    username: 'admin',
    password: '123456',
    role: 'ADMIN',
  },
};

export default function ProfileReducer(state = initState, action) {
  switch (action.type) {
    default: return state;
  }
}