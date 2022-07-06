import * as api from '../api/students'

export const CreateStudent = (post) => async (dispatch) => {
    try {
        const {data} = await api.createStudent(post);
        console.log(data);

        dispatch({type: 'CREATE_STUDENT', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const FetchSubjectDetails = (id) => async (dispatch) => {
    try {
        const {data} = await api.fetchSubjectDetails(id);
        // console.log("data", data);

        dispatch({type: 'FETCH_SUBJECTS', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const FetchStudent = (id) => async (dispatch) => {
    try {
        const {data} = await api.fetchstudent(id);
        // console.log("data", data);

        dispatch({type: 'FETCH_STUDENT', payload: data})
    } catch (error) {
        console.log(error)
    }
}


export const Updatesinglestudent = (id,formData) => async (dispatch) => {
    try {
        console.log("before",id);
        console.log("before",formData);

        const {data} = await api.updatesinglestudent(id,formData);
        console.log("after",id);
        console.log("after",formData);

        dispatch({type: 'UPDATE_SINGLE_STUDENT', payload: data})
    } catch (error) {
        console.log(error)
    }
}


// export const UpdateStudent = (post) => async (dispatch) => {
//     try {
//         const {data} = await api.updateStudent(post);
//         console.log(data);

//         dispatch({type: 'UPDATE_STUDENT', payload: data})
//     } catch (error) {
//         console.log(error)
//     }
// }


export const FetchAllStudent = () => async (dispatch) => {
    try {
        const {data} = await api.fetchAllStudent();
        // console.log("data", data);

        dispatch({type: 'FETCH_ALL_STUDENT', payload: data})
    } catch (error) {
        console.log(error)
    }
}
