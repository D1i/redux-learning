import githubAPIRequest from "../../../services/githubAPIRequest";

const asyncAddingRepositoriesInStore = ({
	repoName,
	functionToCallToRespond,
	sortBy,
	functionToSortingReposList,
}) => {
	githubAPIRequest(repoName)
		//Никак не могу понять, как перенести это в action creater
		.then((info) => {
			let forks = info.forks;
			let subscribers_count = info.subscribers_count;
			if (forks === undefined) {
				repoName = `${repoName} | Такого репозитория не существует`;
				forks = 0;
				subscribers_count = 0;
			}
			functionToCallToRespond({
				repoName,
				forks,
				subscribers_count,
			});
			functionToSortingReposList(sortBy);
		});
};

export default asyncAddingRepositoriesInStore;
