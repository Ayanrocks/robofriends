import {
	CHANGE_SEARCH_FIELD,
	FETCH_ROBOTS_PENDING,
	FETCH_ROBOTS_SUCCESS,
	FETCH_ROBOTS_FAILED
} from "./constants.js";

const initialStateSearch = {
	searchField: ""
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, { searchField: action.payload });
		default:
			return state;
	}
};

const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ""
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
	switch (action.type) {
		case FETCH_ROBOTS_PENDING:
			return {
				...state,
				isPending: false
			};
		case FETCH_ROBOTS_SUCCESS:
			return {
				...state,
				isPending: true,
				robots: action.payload
			};
		case FETCH_ROBOTS_FAILED:
			return {
				...state,
				isPending: false,
				error: action.payload
			};
		default:
			return state;
	}
};
