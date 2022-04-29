import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import Header from "./components/header";
import RouterComponent from "./router";
import movieReducer from "./redux/movies-state";
import moviesSaga from "./redux/movies-saga";

import "./App.css";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
  middleware: [saga],
});

saga.run(moviesSaga);

const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <Header />
        <RouterComponent />
      </Provider>
    </div>
  );
};

export default App;
