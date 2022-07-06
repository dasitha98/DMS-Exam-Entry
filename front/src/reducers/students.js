export default (students = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_STUDENT':
            return action.payload
        case 'FETCH_STUDENT':
            return action.payload
        case 'FETCH_SUBJECTS':
            return action.payload
        case 'CREATE_STUDENT':
            return [ ...students, action.payload]
        case 'UPDATE_SINGLE_STUDENT':
            return [ ...students, action.payload]
        default:
            return students;
    }
}