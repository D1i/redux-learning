const request = () => {
    return fetch("https://api.github.com/repos/D1i/learning_react")
        .then(promiseFromInfo => promiseFromInfo.json()
            .then(info => info));
};
//.forks
//.subscribers_count
export default request;