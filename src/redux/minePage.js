import { TEST_TYPE} from './actionTypes';
import { handleActions } from 'redux-actions';
export default handleActions({
    [TEST_TYPE]: {
        next(state, action) {
            return { ret: true, data: action.payload };
        },
        throw(state, action) {
            return { ret: false, statusText: action.payload, data: [] };
        }
    }
}, { ret: true, statusText: '', data: [] });