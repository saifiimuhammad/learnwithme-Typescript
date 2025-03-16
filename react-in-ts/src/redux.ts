// import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// type StateType = {
//   count: number;
// };

// const initialState: StateType = {
//   count: 0,
// };

// const increment = createAction("increment");
// const decrement = createAction("decrement");

// const rootReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(increment, (state) => {
//       state.count += 1;
//     })
//     .addCase(decrement, (state) => {
//       state.count -= 1;
//     });
// });

// export const store = configureStore({
//   reducer: {
//     rootReducer,
//   },
// });

import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type StateType = {
  count: number;
};

const initialState: StateType = {
  count: 0,
};

const rootSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = rootSlice.actions;

export const store = configureStore({
  reducer: rootSlice.reducer,
});

// if we dont have statetype

// type StateType = ReturnType<typeof store.getState>;
