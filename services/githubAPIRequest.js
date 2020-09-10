const request = (URL) => {
   return fetch(`https://api.github.com/repos/${URL}`)
};

export default request;