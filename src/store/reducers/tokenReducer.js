import { useReducer } from "react";
import { TOKEN } from "../constants";

const initialState = {};

const roleIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOKEN:
            return {
                ...state,
                roleId: action.token
            };
        default:
            return state;
    }
}

export default roleIdReducer;