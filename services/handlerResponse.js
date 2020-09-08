import APIRequest from "./APIRequest"
import { actionTypes } from "../redux/actionTypes";
import store from "../redux/storeRedux";

const handlerResponse = URL => {
  APIRequest(URL)
    .then(promiseFromInfo => promiseFromInfo.json()
    .then(info => {
      let forks = info.forks;
      let subscribers_count = info.subscribers_count;
      if (forks === undefined) {
        URL = `${URL} | Такого URL не существует`;
        forks = `none`;
        subscribers_count = `none`;
      }
      store.dispatch({
        type: actionTypes.REPOS_LIST_ADD,
        payload: {
          URL,
          forks,
          subscribers_count,
        }
      });
      let sortBy = store.getState().sortBy;
      store.dispatch({type: sortBy})
    }));
};

export default handlerResponse;
