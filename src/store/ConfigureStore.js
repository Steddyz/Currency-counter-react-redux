import { createStore } from "redux";
import { counterReducer } from "../reducer/CounterRuducer";

const store = createStore(counterReducer);

export default store;
