import * as types from '../constants';

export const token = (data) => {
    return {
        type: types.TOKEN,
        token: data
    }
}