import { getType, ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { TempReducer } from "./types";

const initialState: TempReducer = {
	isLoading: true,
};

export default function searchReducer(state = initialState, action: ActionType<typeof actions>): TempReducer {
	switch (action.type) {
		case getType(actions.TempStartSuccess):
			return {
				...state,
				isLoading: false,
			};
		default:
	}
	return state;
}
