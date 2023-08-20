import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import dataReducer from "../reducers/covidreducer.tsx";

const rootReducer = combineReducers({
  data: dataReducer,
  data2: dataReducer,
  data3: dataReducer,
});

const middleware = [thunkMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
