import { applyMiddleware, createStore } from "redux";

import addcounterreducer from "./reducer/index";
import thunk from "redux-thunk"


const store = createStore( addcounterreducer,applyMiddleware(thunk))

export default store;
