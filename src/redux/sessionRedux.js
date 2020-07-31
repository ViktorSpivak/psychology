import { configureStore, createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: "session",
  initialState: { user: null, token: null, error: null, authenticated: false },
  reducers: {
    loginRequest: (state, action) => {
      state.user = action.payload.name;
    },
    loginSuccess: (state, action) => {
      state.authenticated = true;
      state.token = action.payload.response.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.authenticated = false;
    },
    loginError: (state, action) => {
      state.error = action.payload.response.error;
    },
  },
});

export const actions = sessionSlice.actions;
export const store = configureStore({
  reducer: { session: sessionSlice.reducer },
});
