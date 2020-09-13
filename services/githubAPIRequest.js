const githubAPIRequest = (URL) => {
	return fetch(
		`https://api.github.com/repos/${URL}`
	).then((promiseFromInfo) => promiseFromInfo.json());
};

export default githubAPIRequest;
