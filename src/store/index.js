import {createStore} from "redux";
import {MyReducer} from "../reducer";

const initialState = {
    title:"Vijay"
};

const store = createStore(MyReducer,initialState);

export default store;
