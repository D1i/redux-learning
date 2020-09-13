import {
	REPOS_LIST_ADD,
	REPOS_LIST_CLEAR,
	SORTING_LIST,
	SORTBY_FORKS,
	SORTBY_SUBSCRIBRES,
	SET_SORTING_TYPE_FORKS,
	SET_SORTING_TYPE_SUBSCRIBERS,
} from "./constants";

const comparison = (comparisonProperty) => (a, b) =>
	a[comparisonProperty] > b[comparisonProperty] ? -1 : 1;

export const URLReposList = (
	state = { list: [], sortingType: SORTBY_FORKS },
	action
) => {
	switch (action.type) {
		case REPOS_LIST_ADD:
			return {
				...state,
				list: [
					...state.list,
					{
						repoName: action.payload.repoName,
						forks: action.payload.forks,
						subscribers_count: action.payload.subscribers_count,
					},
				],
			};
		case REPOS_LIST_CLEAR:
			return { ...state, list: [] };
		case SORTING_LIST:
			if (state.sortingType === SORTBY_FORKS) {
				return {
					...state,
					list: [...state.list].sort(comparison("forks")),
				};
			} else {
				return {
					...state,
					list: [...state.list].sort(comparison("subscribers")),
				};
			}
		case SET_SORTING_TYPE_FORKS:
			return {
				...state,
				sortingType: SORTBY_FORKS,
			};
		case SET_SORTING_TYPE_SUBSCRIBERS:
			return {
				...state,
				sortingType: SORTBY_SUBSCRIBRES,
			};
		default:
			return { ...state };
	}
};
