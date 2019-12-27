import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from './reducers'
const initialState = {
  favoritesTecnics:[],
  tecnics:[
    {
      id: 1,
      name: "Alejandro García",
      office: "Carpintero",
      stars: 5,
      location: "Miraflores",
      opinions: 10,
      works: 20,
      imageUrl:'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/67781294_928740974145598_6819038370912534528_n.jpg?_nc_cat=111&_nc_ohc=jrj_tZ8Ua3wAQnXhLfNk75ArKrKwGDJ6mKC4R6gcXNV0YRhz7mLTU9Vbg&_nc_ht=scontent-scl1-1.xx&oh=6d7cc50216edb850e7bc4e9157fdc17e&oe=5E6E57CD'
    },
    {
      id: 2,
      name: "Carlos García",
      office: "Carpintero",
      stars: 5,
      location: "Miraflores",
      opinions: 10,
      works: 20,
      imageUrl:'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/67781294_928740974145598_6819038370912534528_n.jpg?_nc_cat=111&_nc_ohc=jrj_tZ8Ua3wAQnXhLfNk75ArKrKwGDJ6mKC4R6gcXNV0YRhz7mLTU9Vbg&_nc_ht=scontent-scl1-1.xx&oh=6d7cc50216edb850e7bc4e9157fdc17e&oe=5E6E57CD'
    },
    {
      id: 3,
      name: "Carlos García",
      office: "Carpintero",
      stars: 5,
      location: "Miraflores",
      opinions: 10,
      works: 20,
      imageUrl:'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/67781294_928740974145598_6819038370912534528_n.jpg?_nc_cat=111&_nc_ohc=jrj_tZ8Ua3wAQnXhLfNk75ArKrKwGDJ6mKC4R6gcXNV0YRhz7mLTU9Vbg&_nc_ht=scontent-scl1-1.xx&oh=6d7cc50216edb850e7bc4e9157fdc17e&oe=5E6E57CD'
    },
    {
      id: 4,
      name: "Carlos García",
      office: "Carpintero",
      stars: 5,
      location: "Miraflores",
      opinions: 50,
      works: 20,
      imageUrl:'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/67781294_928740974145598_6819038370912534528_n.jpg?_nc_cat=111&_nc_ohc=jrj_tZ8Ua3wAQnXhLfNk75ArKrKwGDJ6mKC4R6gcXNV0YRhz7mLTU9Vbg&_nc_ht=scontent-scl1-1.xx&oh=6d7cc50216edb850e7bc4e9157fdc17e&oe=5E6E57CD'
    },
    {
      id: 5,
      name: "Carlos García",
      office: "Carpintero",
      stars: 5,
      location: "Miraflores",
      opinions: 50,
      works: 20,
      imageUrl:'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/67781294_928740974145598_6819038370912534528_n.jpg?_nc_cat=111&_nc_ohc=jrj_tZ8Ua3wAQnXhLfNk75ArKrKwGDJ6mKC4R6gcXNV0YRhz7mLTU9Vbg&_nc_ht=scontent-scl1-1.xx&oh=6d7cc50216edb850e7bc4e9157fdc17e&oe=5E6E57CD'
    },
    {
      id: 6,
      name: "Carlos García",
      office: "Carpintero",
      stars: 5,
      location: "Miraflores",
      opinions: 50,
      works: 20,
      imageUrl:'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/67781294_928740974145598_6819038370912534528_n.jpg?_nc_cat=111&_nc_ohc=jrj_tZ8Ua3wAQnXhLfNk75ArKrKwGDJ6mKC4R6gcXNV0YRhz7mLTU9Vbg&_nc_ht=scontent-scl1-1.xx&oh=6d7cc50216edb850e7bc4e9157fdc17e&oe=5E6E57CD'
    },
    {
      id: 7,
      name: "Carlos García",
      office: "Carpintero",
      stars: 5,
      location: "Miraflores",
      opinions: 50,
      works: 20,
      imageUrl:'https://scontent-scl1-1.xx.fbcdn.net/v/t1.0-9/67781294_928740974145598_6819038370912534528_n.jpg?_nc_cat=111&_nc_ohc=jrj_tZ8Ua3wAQnXhLfNk75ArKrKwGDJ6mKC4R6gcXNV0YRhz7mLTU9Vbg&_nc_ht=scontent-scl1-1.xx&oh=6d7cc50216edb850e7bc4e9157fdc17e&oe=5E6E57CD'
    }
  ],
};
const store = createStore(reducer,initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
