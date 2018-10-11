const initialState = {
    user: {}
}

//types
const UPDATE_USER = "UPDATE_USER";

//action creators
export function updateUser(data) {
    return {
        type: UPDATE_USER,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return Object.assign({}, state, { user: action.payload })
        //creates open object, places state in the object, updates they user key value on state
        default:
            return state;
    }
}