export default (subjects = [], action) => {
    switch (action.type) {
        // case 'DELETE_ORDER':
        //     return orders.filter((order) => order._id !== action.payload);
        // case 'UPDATE_ORDER':
        //     return orders.map((order) => order._id === action.payload._id ? action.payload : order)
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

