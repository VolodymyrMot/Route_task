const initialState = [];

export default function post(state = initialState, action) {
    if (action.type === 'TO_ARTICLE') {
        console.log(state);
        return [action.payload];
    }
    return state;
}
