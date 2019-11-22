const initialState = {
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'MESSAGE':
            return {...state, message: action.payload};
        default:
            return state;
    }
}
