/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { ServerResponse } from "http";
import { call, put, takeEvery } from "redux-saga/effects";
import { getMoviesSucess } from "./movies-state";



const url = process.env.REACT_APP_API_URL;

export function requestSearchedMovies(searchTitle: string) {
  console.log(url)
  return axios.request({
    method: "get",
    url: url + searchTitle,
  });
}

function* workGetMoviesFetch(action: { payload: string; type: string }) {
  const movies: ServerResponse = yield call(
    requestSearchedMovies,
    action.payload
  );

  yield put(getMoviesSucess(movies));
}

function* moviesSaga() {
  yield takeEvery("movies/getMoviesFetch", workGetMoviesFetch);
}

export default moviesSaga;
