import { combineReducers } from 'redux'
import student from './students'
import subjects from './subjects'

export default combineReducers({
    student,
    subjects,
})
