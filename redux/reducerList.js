import { actionTypes } from "./actionTypes";
import { SORTBY_FORKS, SORTBY_SUBSCRIBRES } from "./constants";

export const URLReposList = (state = { list: [] }, action) => {
	switch (action.type) {
		case actionTypes.REPOS_LIST_ADD:
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
		case actionTypes.REPOS_LIST_CLEAR:
			return { ...state, list: [] };
		case actionTypes.SORTING_LIST_BY_FORKS:
			return {
				...state,
				list: [...state.list].sort((a, b) => {
					if (a.forks > b.forks) {
						return -1;
					}
					if (a.forks < b.forks) {
						return 1;
					}

					return 0;
				}),
			};
		case actionTypes.SORTING_LIST_BY_SUBSCRIBERS_COUNT:
			return {
				...state,
				list: [...state.list].sort((a, b) => {
					if (a.subscribers_count > b.subscribers_count) {
						return -1;
					}
					if (a.subscribers_count < b.subscribers_count) {
						return 1;
					}

					return 0;
				}),
			};
		default:
			return state;
	}
};

export const sortBy = (state = { sortingType: SORTBY_FORKS }, action) => {
	switch (action.type) {
		case actionTypes.SORTING_LIST_BY_FORKS:
			return { sortingType: SORTBY_FORKS };
		case actionTypes.SORTING_LIST_BY_SUBSCRIBERS_COUNT:
			return { sortingType: SORTBY_SUBSCRIBRES };
		default:
			return state;
	}
};
