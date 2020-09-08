import store from "../redux/storeRedux";
import { actionTypes } from "../redux/actionTypes";

const request = (URL) => {
   fetch(`https://api.github.com/repos/${URL}`)
        .then(promiseFromInfo => promiseFromInfo.json()
            .then(info => {
                let forks = info.forks;
                let subscribers_count = info.subscribers_count;
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

export default request;