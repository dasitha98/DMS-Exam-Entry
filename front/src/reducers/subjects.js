export default (subjects = [], action) => {
    switch (action.type) {
        case 'CREATE_SUBJECT':
            return [ ...subjects, action.payload]
        case 'FETCH_SUBJECT':
            return action.payload
        case 'UPDATE_SINGLE_SUBJECT':
            return [ ...subjects, action.payload]
        default:
            return subjects;
    }
}

