import { 
    applyMiddleware, 
    combineReducers, 
    createStore, 
    Store 
} from 'redux';
import thunk from 'redux-thunk';
import {
    entryReducer,
    IEntryState
} from '../reducers/EntryReducer';

export interface IAppState {
    entryState: IEntryState;
}

const rootReducer = combineReducers<IAppState>({
    entryState: entryReducer,
});

export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}