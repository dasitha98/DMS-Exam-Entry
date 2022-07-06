import * as api from '../api/subjects'

export const CreateSubject = (post) => async (dispatch) => {
    try {
        const {data} = await api.createSubject(post);
        console.log(data);

        dispatch({type: 'CREATE_SUBJECT', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const Updatesinglesubject = (id,formData) => async (dispatch) => {
    try {
        console.log("before",id);
        console.log("before",formData);

        const {data} = await api.updatesinglesubject(id,formData);
        console.log("after",id);
        console.log("after",formData);

        dispatch({type: 'UPDATE_SINGLE_SUBJECT', payload: data})
    } catch (error) {
        console.log(error)
    }
}


export const Fetchsubject = (id) => async (dispatch) => {
    try {
        const {data} = await api.fetchsubject(id);
        // console.log("data", data);

        dispatch({type: 'FETCH_SUBJECT', payload: data})
    } catch (error) {
        console.log(error)
    }
}


// export const getAllOrders = () => async (dispatch) => {
//     try {
//         dispatch({type: 'SHOW_LOADER'})
//         const {data} = await api.fetchOrders();
//         console.log(data)
//         dispatch({type: 'FETCH_PRODUCTS', payload: data})
//         dispatch({type: 'HIDE_LOADER'})
//     } catch (error) {
//         console.log(error)
//         dispatch({type: 'SHOW_ERROR', payload: error})
//     }
// }

// export const getOrderDetails = (id) => async (dispatch) => {
//     try {
//         dispatch({type: 'SHOW_LOADER'})
//         dispatch({type: 'CLEAR_IMAGES'})
//         const {data} = await api.fetchOrderDetails(id);
//         console.log("data from actions ", data)
//         dispatch({type: 'FETCH_PRODUCT_DETAILS', payload: data})
//         dispatch({type: 'CREATE_IMAGE_FOR_EDIT', payload: data[0].selectedFiles})
//         dispatch({type: 'HIDE_LOADER'})
//     } catch (error) {
//         console.log(error)
//         dispatch({type: 'SHOW_ERROR', payload: error})
//     }
// }




// export const updateOrder = (id, post, history) => async (dispatch) => {
//     try {
//         dispatch({type: 'SHOW_LOADER'})
//         const {data} = await api.updateOrder(id, post);
//         dispatch({type: 'UPDATE_POST', payload: data})
//         dispatch({type: 'HIDE_LOADER'})
//         dispatch({type: 'SHOW_SUCCESS', payload: {message: "Post updated"}})
//         history.push('/products')
//         dispatch({type: 'CLEAR_IMAGES'})
//     } catch (error) {
//         console.log(error)
//         dispatch({type: 'SHOW_ERROR', payload: error})
//     }
// }


// export const deleteOrder = (id) => async (dispatch) => {
//     try {
//         dispatch({type: 'SHOW_LOADER'})
//         await api.deleteOrder(id)
//         dispatch({type: 'DELETE_PRODUCT', payload: id})
//         dispatch({type: 'HIDE_LOADER'})
//         dispatch({type: 'SHOW_SUCCESS', payload: {message: "Product deleted"}})
//     } catch (error) {
//         console.log(error)
//         dispatch({type: 'SHOW_ERROR', payload: error})
//     }
// }

