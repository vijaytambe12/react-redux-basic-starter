import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import MyApp from "./MyApp";
import {Provider} from "react-redux"
import store from "./store";

function App() {

    return (
        <Provider store={store}>
            <div className="App">
                <MyApp/>
            </div>
        </Provider>
    );
}

export default App;
