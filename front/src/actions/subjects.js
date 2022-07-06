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

