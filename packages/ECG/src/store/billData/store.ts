import { combineReducers, createStore } from 'redux';
import { formReducer } from './reducers';
import { rootReducer } from '../rootReducer';

const formDataReducer = combineReducers({
    form: formReducer,
    ...rootReducer
});

const store = createStore(formDataReducer);

export default store;
