const request = () => {
    return {
        forks: Math.floor(Math.random() * 10),
        subscribers_count: Math.floor(Math.random() * 100),
    }
};
//.forks
//.subscribers_count
export default request;